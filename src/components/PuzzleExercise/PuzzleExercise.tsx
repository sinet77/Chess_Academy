import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Square } from "react-chessboard/dist/chessboard/types";
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
import { toast, ToastContainer } from "react-toastify";
import { useChessboard } from "../../hooks/useChessboard";

export default function PuzzlesExercise() {
  const {
    game,
    chessboardProps,
    setBoardOrientation,
    setPosition,
    setHighlightedSquares,
    setRightClickedSquares,
    isShowMovesEnabled,
    handleToggleShowEnableMoves,
  } = useChessboard({ onPieceDrop, id: "PuzzleChessboard" });

  const location = useLocation();
  const { min, max } = location.state;

  const [moves, setMoves] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [startingColor, setStartingColor] = useState<string>("");
  const [isAutoNextEnabled, setIsAutoNextEnabled] = useState<boolean>(false);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

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
    setIsTimerActive(true);

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const puzzle = data[0];
      setPosition(puzzle.fen);
      setMoves(puzzle.moves);
      game.current.load(puzzle.fen);
      setIsPlayerTurn(false);

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

      const move = game.current.move(nextMove);
      if (move) {
        setPosition(game.current.fen());
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

  const getStartingColorForPlayer = (fen: string) => {
    const spliitedPartsInFenToGetAColor = fen.split(" ");
    if (spliitedPartsInFenToGetAColor[1] === "w") {
      setBoardOrientation("black");
      return "White";
    } else {
      setBoardOrientation("white");
      return "Black";
    }
  };

  const automaticTransitionAfterSolvingPuzzle = () => {
    if (isAutoNextEnabled && isPuzzleSolved) {
      setTimeout(() => {
        fetchPuzzle();
      }, 1000);
    }
  };
  const handleToggleAutoNext = () => {
    setIsAutoNextEnabled((prev) => !prev);
  };

  useEffect(() => {
    automaticTransitionAfterSolvingPuzzle();
  }, [isPuzzleSolved, isAutoNextEnabled]);

  function onPieceDrop(sourceSquare: Square, targetSquare: Square): boolean {
    const previousFen = game.current.fen();

    if (!game.current.move) {
      setPosition(previousFen);
      return false;
    }

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
        handleTimerEnd();
      }

      setIsPlayerTurn(false);
      executeComputerMove();
    } else {
      game.current.undo();
      setPosition(previousFen);
      console.log(previousFen);

      setIsPlayerTurn(true);
    }

    setPosition(game.current.fen());
    return true;
  }

  useEffect(() => {
    if (!isPlayerTurn && currentMoveIndex < moves.length) {
      const timer = setTimeout(() => {
        executeComputerMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, currentMoveIndex, moves]);

  const handleTimerEnd = () => {
    setIsTimerActive(false);
  };

  const notify = () => {
    toast.success(
      <Box>
        Correct! XP gained <ScienceIcon sx={{ verticalAlign: "middle" }} />
      </Box>,
      {
        position: "top-center",
        autoClose: 6000,
      }
    );
  };

  useEffect(() => {
    if (isPuzzleSolved) {
      notify();
    }
  }, [isPuzzleSolved]);

  return (

      <Box sx={style.Main}>
        {loading ? (
          <Box sx={style.ImgContainer}>
            <Box component="img" src={loading_gif} />
          </Box>
        ) : (
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ToastContainer />
              <Typography sx={style.ColorOnMove}>
                {startingColor} on move
              </Typography>
              <Box
                sx={{
                  ...style.ColorCircle,
                  backgroundColor:
                    startingColor === "White" ? "white" : "black",
                }}
              />
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="center">
              {!isPuzzleSolved ? (
                <Stopwatch
                  currentMoveIndex={currentMoveIndex}
                  moves={moves}
                  isTurnedOn={isTimerActive}
                  onTimerEnd={handleTimerEnd}
                />
              ) : (
                <Typography
                  sx={{
                    lineHeight: "53px",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Puzzle Solved!
                </Typography>
              )}
            </Grid>

            <Box sx={style.Chessboard}>
              <Chessboard {...chessboardProps} />
            </Box>

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
