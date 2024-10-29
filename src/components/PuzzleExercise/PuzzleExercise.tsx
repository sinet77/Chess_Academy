import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import { SquareStyles } from "./PuzzleExercise.types";
import ScienceIcon from "@mui/icons-material/Science";
import Stopwatch from "./Stopwatch/Stopwatch";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import * as style from "./PuzzleExercise.style";
import { loading_gif } from "../../assets/PuzzleExerciseImages";
import { useLocation } from "react-router-dom";

export default function PuzzlesExercise() {
  const location = useLocation();
  const { min, max } = location.state;

  const [fen, setFen] = useState<string>("start");
  const [moves, setMoves] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(false);
  const [chess] = useState<Chess>(new Chess());
  const [loading, setLoading] = useState<boolean>(false);
  const [startingColor, setStartingColor] = useState<string>("");
  const [highlightedSquares, setHighlightedSquares] = useState<SquareStyles>(
    {}
  );
  const [rightClickedSquares, setRightClickedSquares] = useState<SquareStyles>(
    {}
  );
  const [optionSquares, setOptionSquares] = useState<SquareStyles>({});
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");
  const [isAutoNextEnabled, setIsAutoNextEnabled] = useState<boolean>(false);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);
  const [isShowMovesEnabled, setIsShowMovesEnabled] = useState<boolean>(true);

  async function fetchPuzzle() {
    const url = `https://chess-puzzles2.p.rapidapi.com/range?min=${min}&max=${max}&max_deviation=100&number_of_puzzles=1`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1c257a4e1amsh35b3beb37f3c084p1dca68jsna17c69e595e5",
        "x-rapidapi-host": "chess-puzzles2.p.rapidapi.com",
      },
    };
    setIsPuzzleSolved(false);
    setLoading(true);
    setMoves([]);
    setCurrentMoveIndex(0);
    setHighlightedSquares({});
    setRightClickedSquares({});

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const puzzle = data[0];
      setFen(puzzle.fen);
      setMoves(puzzle.moves);
      chess.load(puzzle.fen);
      setIsPlayerTurn(false);
      console.log("Ruchy", puzzle.moves);

      const color = getStartingColorForPlayer(puzzle.fen);
      setStartingColor(color === "White" ? "Black" : "White");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPuzzle();
  }, [min, max]);

  const executeComputerMove = () => {
    if (!isPlayerTurn && currentMoveIndex < moves.length) {
      const nextMove = moves[currentMoveIndex];

      const move = chess.move(nextMove);
      if (move) {
        setFen(chess.fen());
        setCurrentMoveIndex(currentMoveIndex + 1);
        setIsPlayerTurn(true);

        const sourceSquareComputer = move.from;
        const targetSquareComputer = move.to;

        setHighlightedSquares({
          [sourceSquareComputer]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
          [targetSquareComputer]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
        });
      }
    }
  };

  function getStartingColorForPlayer(fen: string) {
    const spliitedPartsInFenToGetAColor = fen.split(" ");
    if (spliitedPartsInFenToGetAColor[1] === "w") {
      setChangeBoardOrientation("black");
      return "White";
    } else {
      setChangeBoardOrientation("white");
      return "Black";
    }
  }

  function automaticTransitionAfterSolvingPuzzle() {
    if (isAutoNextEnabled && isPuzzleSolved) {
      setTimeout(() => {
        fetchPuzzle();
      }, 1000);
    }
  }
  const handleToggleAutoNext = () => {
    setIsAutoNextEnabled((prev) => !prev);
  };

  useEffect(() => {
    automaticTransitionAfterSolvingPuzzle();
  }, [isPuzzleSolved, isAutoNextEnabled]);

  const onPieceDrop = (
    sourceSquare: Square,
    targetSquare: Square,
    piece: Piece
  ): boolean => {
    console.log(
      "Piece dropped:",
      piece,
      "from:",
      sourceSquare,
      "to:",
      targetSquare
    );

    const previousFen = chess.fen();

    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (!move) {
      setFen(previousFen);
      return false;
    }

    console.log("Move performed:", move.san);

    const moveIndex = currentMoveIndex;
    const apiMove = moves[moveIndex];

    const isPromotionMove = apiMove.length === 5;

    let isValidMove = false;

    if (isPromotionMove) {
      const possiblePromotions = ["q", "r", "b", "n"];
      const convertedMoveFromSANToAPIFormat = sourceSquare + targetSquare;

      isValidMove = possiblePromotions.some((promotion) => {
        const apiMoveWithPromotion =
          convertedMoveFromSANToAPIFormat + promotion;
        return apiMove === apiMoveWithPromotion;
      });
    } else {
      isValidMove = apiMove === sourceSquare + targetSquare;
    }

    if (isValidMove) {
      const newIndex = moveIndex + 1;
      setCurrentMoveIndex(newIndex);

      if (newIndex === moves.length) {
        setIsPuzzleSolved(true);
      }

      setHighlightedSquares({
        [sourceSquare]: { backgroundColor: "#b2aa5e" },
        [targetSquare]: { backgroundColor: "#ccd285" },
      });

      setIsPlayerTurn(false);
      executeComputerMove();
    } else {
      console.error("Invalid move:", move.san);
      chess.undo();
      setFen(previousFen);
    }

    setFen(chess.fen());
    return true;
  };

  useEffect(() => {
    if (!isPlayerTurn && currentMoveIndex < moves.length) {
      const timer = setTimeout(() => {
        executeComputerMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, currentMoveIndex, moves]);

  function onSquareRightClick(square: Square) {
    const color = "rgba(254,46,46, 0.4)";
    const isRightClicked =
      rightClickedSquares[square]?.backgroundColor === color;

    setRightClickedSquares((prevState) => ({
      ...prevState,
      [square]: isRightClicked
        ? { backgroundColor: "transparent" }
        : { backgroundColor: color },
    }));
  }

  function getMoveOptions(square: Square) {
    const moves = chess.moves({
      square,
      verbose: true,
    });
    if (moves.length === 0) {
      return;
    }

    const newSquares: SquareStyles = {};
    moves.map((move) => {
      newSquares[move.to] = {
        background:
          chess.get(move.to) &&
          chess.get(move.to).color !== chess.get(square).color
            ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
      return move;
    });
    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };
    setOptionSquares(newSquares);
  }

  function onMouseOverSquare(square: Square) {
    if (isShowMovesEnabled) {
      getMoveOptions(square);
    }
  }
  function onMouseOutSquare() {
    if (Object.keys(optionSquares).length !== 0) {
      setOptionSquares({});
    }
  }

  const handleToggleShowEnableMoves = () => {
    setIsShowMovesEnabled((prev) => !prev);
  };

  return (
    <Box sx={style.Main}>
      {loading ? (
        <Box sx={style.ImgContainer}>
          <Box component="img" src={loading_gif} />
        </Box>
      ) : (
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={style.ColorOnMove}>
              {startingColor} on move
            </Typography>
            <Box
              sx={{
                ...style.ColorCircle,
                backgroundColor: startingColor === "White" ? "white" : "black",
              }}
            />
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center">
            <Stopwatch currentMoveIndex={currentMoveIndex} moves={moves} />
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center">
            <Box>
              {isPuzzleSolved && (
                <Box sx={style.CorrectText}>
                  Correct! XP gained <ScienceIcon />
                </Box>
              )}
              <Chessboard
                id="PuzzleChessboard"
                position={fen}
                arePiecesDraggable={true}
                arePremovesAllowed={false}
                boardWidth={500}
                onPieceDrop={onPieceDrop}
                onSquareRightClick={onSquareRightClick}
                onMouseOverSquare={onMouseOverSquare}
                onMouseOutSquare={onMouseOutSquare}
                customSquareStyles={{
                  ...highlightedSquares,
                  ...rightClickedSquares,
                  ...optionSquares,
                }}
                boardOrientation={changeBoardOrientation}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={style.NextButtonAndSwitch}>
              <Button sx={style.Button} onClick={fetchPuzzle}>
                Next Puzzle
              </Button>
              <FormControlLabel
                control={
                  <Switch
                    checked={isAutoNextEnabled}
                    onChange={handleToggleAutoNext}
                    sx={style.Switch}
                  />
                }
                label="Auto Next Puzzle on correct"
                sx={style.OptionSwitchLabel}
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={isShowMovesEnabled}
                    onChange={handleToggleShowEnableMoves}
                    sx={style.Switch}
                  />
                }
                label="Enable Move Highlights"
                sx={style.OptionSwitchLabel}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

//[{"id": "QJ1c8", "fen": "2b3k1/1p6/6p1/q2pp1NP/1n5Q/1P6/5P2/1K1R3R w - - 4 28",
//"moves": ["h5g6", "a5a2", "b1c1", "a2c2"], "numberOfMoves": "4", "rating": "1318",
//"ratingDeviation": "77", "minRating": "1241", "maxRating": "1395",
//"themes": "mate mateIn2 middlegame short", "openingFamily": "no data", "openingVariation": "no data"}]
