import { useEffect, useRef, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Link, List, ListItem, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Square } from "react-chessboard/dist/chessboard/types";
import * as style from "./DisplayDailyPuzzle.style";
import { Puzzle } from "../PuzzleTypes";
import { SquareStyles } from "./DisplayDailyPuzzle.types";

export default function Puzzles({ puzzle }: { puzzle: Puzzle | null }) {
  const chess = useRef<Chess>(new Chess());
  const [isMovable, setIsMovable] = useState(true);
  const [fen, setFen] = useState<string>("start");
  const [moves, setMoves] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [playedMoves, setPlayedMoves] = useState<
    { move: string; isValid: boolean }[]
  >([]);
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [highlightedSquares, setHighlightedSquares] = useState<SquareStyles>(
    {}
  );
  const [rightClickedSquares, setRightClickedSquares] = useState<SquareStyles>(
    {}
  );

  const handleBoardOrientation = () => {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  };

  const onSquareRightClick = (square: Square) => {
    const color = "rgba(254,46,46, 0.4)";
    const isRightClicked =
      rightClickedSquares[square]?.backgroundColor === color;

    setRightClickedSquares((prevState) => ({
      ...prevState,
      [square]: isRightClicked
        ? { backgroundColor: "transparent" }
        : { backgroundColor: color },
    }));
  };

  const showCorrectTitleWhenSolved = () => {
    if (currentMoveIndex === moves.length - 1) {
      setIsCorrect(true);
    }
  };

  const resetGame = () => {
    if (puzzle?.fen) {
      chess.current.load(puzzle.fen);
      setFen(puzzle.fen);
    }
    setHighlightedSquares({});
    setPlayedMoves([]);
    setCurrentMoveIndex(0);
    setIsMovable(true);
  };

  const cleanMove = (move: string): string | null => {
    // Usuwa numer ruchu, "x", "+", "!" i inne znaki, aby uzyskać czysty ruch
    const cleaned = move
      .replace(/^\d+\.\s*/, "")
      .replace(/[x+!?]/g, "")
      .trim();

    return cleaned || null;
  };

  useEffect(() => {
    if (puzzle && puzzle.fen) {
      chess.current.load(puzzle.fen);
      setFen(puzzle.fen);
    }

    if (puzzle && puzzle.pgn) {
      const pgn = puzzle.pgn;

      const pgnLines = pgn
        .split("\n")
        .filter((line) => !line.startsWith("[") && line.trim() !== "");

      const moves: string[] = [];

      pgnLines.forEach((line) => {
        const parts = line.split(" ");

        parts.forEach((part) => {
          if (
            (part.match(/^\d+\.\w+/) || !part.match(/^\d+\./)) &&
            part !== "*"
          ) {
            const cleanedMove = cleanMove(part);
            if (cleanedMove) {
              moves.push(cleanedMove);
            }
          }
        });
      });

      setMoves(moves);
      setCurrentMoveIndex(0);
    }
  }, [puzzle]);

  const onPieceDrop = (sourceSquare: Square, targetSquare: Square): boolean => {
    const previousFen = chess.current.fen();

    const move = chess.current.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    const moveDescription = move.san;

    if (move === null) {
      console.error(`Invalid move: ${sourceSquare} to ${targetSquare}`);
      setFen(previousFen);

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
          const PCmove = chess.current.move(blackMove);
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
          setFen(chess.current.fen());
          setCurrentMoveIndex(blackMoveIndex + 1);

          if (blackMoveIndex + 1 === moves.length) {
            setIsMovable(false);
            setIsCorrect(true);
          }
        }, 500);
      }
    } else {
      chess.current.undo();
      setFen(previousFen);
      setPlayedMoves((prevMoves) => [
        ...prevMoves,
        { move: moveDescription, isValid: false },
      ]);
    }

    setFen(chess.current.fen());
    showCorrectTitleWhenSolved();

    return true;
  };

  return (
    <Box>
      <Box sx={style.Navbar}></Box>
      <Box sx={style.Main}>
        <Box sx={style.BoardAndButtons}>
          <Typography sx={{ color: "white" }}>
            {isCorrect ? "correct" : ""}
          </Typography>
          <Box sx={style.Chessboard}>
            <Chessboard
              id="BasicChessboard"
              position={fen}
              onPieceDrop={onPieceDrop}
              arePiecesDraggable={isMovable}
              boardOrientation={changeBoardOrientation}
              onSquareRightClick={onSquareRightClick}
              customDarkSquareStyle={{ backgroundColor: "#e0e0e0" }}
              customLightSquareStyle={{ backgroundColor: "#607d8b" }}
              customSquareStyles={{
                ...highlightedSquares,
                ...rightClickedSquares,
              }}
            />
          </Box>
          <Box sx={style.ButtonsContainer}>
            <Button onClick={resetGame} sx={style.Button}>
              Reset puzzle
            </Button>
            <Button onClick={handleBoardOrientation} sx={style.Button}>
              Swap orientation
            </Button>
          </Box>
        </Box>

        <Box sx={style.Moves}>
          <Box sx={style.Title}>
            <Link to={"/"} component={RouterLink}>
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
        </Box>
      </Box>
    </Box>
  );
}
