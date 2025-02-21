import { useEffect, useState } from "react";
import { PieceDropArgs } from "../../../../hooks/useChessboard";
import { Chessboard } from "react-chessboard";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import * as style from "./DisplayDailyPuzzle.style";
import { Puzzle } from "../PuzzleTypes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "../../../../routes";
import { useChessboard } from "../../../../hooks/useChessboard";

export default function Puzzles({ puzzle }: { puzzle: Puzzle | null }) {
  const [isMovable, setIsMovable] = useState(true);
  const [moves, setMoves] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [playedMoves, setPlayedMoves] = useState<
    { move: string; isValid: boolean }[]
  >([]);
  const [startingColor, setStartingColor] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const {
    game,
    chessboardProps,
    toggleBoardOrientation,
    setBoardOrientation,
    setHighlightedSquares,
    undoMove,
    setPosition,

  } = useChessboard({ onPieceDrop, id: "DailyPuzzleBoard" });

  const showCorrectTitleWhenSolved = () => {
    if (currentMoveIndex === moves.length - 1) {
      setIsCorrect(true);
    }
  };

  const getStartingColorForPlayer = (fen: string) => {
    const spliitedPartsInFenToGetAColor = fen.split(" ");
    if (spliitedPartsInFenToGetAColor[1] === "w") {
      setBoardOrientation("white");
      setStartingColor("White");
    } else {
      setBoardOrientation("black");
      setStartingColor("Black");
    }
  };

  const resetGame = () => {
    if (puzzle?.fen) {
      game.current.load(puzzle.fen);
      setPosition(puzzle.fen);
    }
    setHighlightedSquares({});
    setPlayedMoves([]);
    setCurrentMoveIndex(0);
    setIsMovable(true);
  };

  const cleanMove = (move: string): string | null => {
    // Usuwa numer ruchu, "x", "+", "!" i inne znaki, aby uzyskać czysty ruch
    const cleaned = move.replace(/[x+!?]/g, "").trim();

    return cleaned || null;
  };

  useEffect(() => {
    if (!puzzle) {
      return;
    }

    if (puzzle.fen) {
      game.current.load(puzzle.fen);
      setPosition(puzzle.fen);
      getStartingColorForPlayer(puzzle.fen);
    }

    if (puzzle.pgn) {
      const pgn = puzzle.pgn;
      game.current.loadPgn(pgn);
      const moves = game.current
        .history({ verbose: true })
        .map((move) => move.san);
      const cleanedMoves = moves.map(cleanMove).filter((move) => move !== null);
      console.log(cleanedMoves);

      setMoves(cleanedMoves);
      setCurrentMoveIndex(0);
    }
  }, [puzzle]);

  useEffect(() => {
    if (puzzle) {
      resetGame();
    }
  }, [puzzle]);

  function onPieceDrop({sourceSquare, targetSquare, move}: PieceDropArgs): boolean {
    const previousFen = game.current.fen();

    const moveDescription = move.san;

    if (game.current.move === null) {
      console.error(`Invalid move: ${sourceSquare} to ${targetSquare}`);
      setPosition(previousFen);

      return false;
    }

    const sanitizedMove = cleanMove(move.san);
    const moveIndex = currentMoveIndex;

    if (sanitizedMove === moves[moveIndex]) {
      setPlayedMoves((prevMoves) => [
        ...prevMoves,
        { move: move.san, isValid: true },
      ]);

      setCurrentMoveIndex(moveIndex + 1);

      const blackMoveIndex = moveIndex + 1;

      if (blackMoveIndex < moves.length) {
        setTimeout(() => {
          const blackMove = moves[blackMoveIndex];
          const PCmove = game.current.move(blackMove);
          const sourceSquareComputer = PCmove.from;
          const targetSquareComputer = PCmove.to;

          setHighlightedSquares({
            [sourceSquareComputer]: {
              backgroundColor: "rgba(255, 255, 0, 0.4)",
            },
            [targetSquareComputer]: {
              backgroundColor: "rgba(255, 255, 0, 0.4)",
            },
          });
          setPosition(game.current.fen());
          setCurrentMoveIndex(blackMoveIndex + 1);

          if (blackMoveIndex + 1 === moves.length) {
            setIsMovable(false);
            setIsCorrect(true);
          }
        }, 500);
      }
    } else {
      undoMove();
      setPosition(previousFen);
      setPlayedMoves((prevMoves) => [
        ...prevMoves,
        { move: moveDescription, isValid: false },
      ]);
    }

    setPosition(game.current.fen());
    showCorrectTitleWhenSolved();

    return true;
  }

  const notify = () =>
    toast.success("Congratulations, you solved this!", {
      position: "bottom-right",
      autoClose: 6000,
    });

  useEffect(() => {
    if (isCorrect) {
      notify();
    }
  }, [isCorrect]);

  return (
    <Box>
      <Grid container sx={style.Main}>
        <Grid item xs={12} md={9} sx={style.BoardAndButtons}>
          <Typography sx={style.ColorOnMove}>
            {startingColor} on move
          </Typography>
          <ToastContainer />
          <Box sx={style.Chessboard}>
            <Chessboard
              {...chessboardProps}
              arePiecesDraggable={isMovable}
            />

          </Box>
          <Box sx={style.ButtonsContainer}>
            <Button onClick={resetGame} sx={style.Button}>
              Reset puzzle
            </Button>
            <Button onClick={toggleBoardOrientation} sx={style.Button}>
              Swap orientation
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} sx={style.Moves}>
          <Box sx={style.Title}>
            <Link to={routes.home} component={RouterLink}>
              <ArrowBackIcon sx={style.ArrowBackIcon} />
            </Link>
            <Box sx={style.TitleContainer}>
              <Typography sx={style.TitleName}>Daily Puzzle</Typography>
              <ExtensionIcon sx={style.PuzzleIcon} />
            </Box>
          </Box>
          <List>
            {playedMoves.map((moveName, index) => (
              <ListItem key={index}>
                <Box sx={style.ListItem}>
                  {moveName.isValid ? (
                    <CheckCircleIcon sx={style.CheckIcon} />
                  ) : (
                    <CancelIcon sx={style.CancelIcon} />
                  )}
                  <Typography
                    sx={{
                      color: `${moveName.isValid ? "#81B64C " : "#FA412D"}`,
                    }}
                  >
                    {moveName.move}
                  </Typography>
                  {moveName.isValid ? (
                    <Typography sx={style.ValidationCorrectMoveName}>
                      is correct!
                    </Typography>
                  ) : (
                    <Typography sx={style.ValidationWrongMoveName}>
                      is not correct. Try again!
                    </Typography>
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
