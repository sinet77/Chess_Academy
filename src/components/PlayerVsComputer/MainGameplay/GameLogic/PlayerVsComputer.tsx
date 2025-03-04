import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import * as style from "./PlayerVsComputer.style";
import { useLocation } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import { useChessboard } from "../../../../hooks/useChessboard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MovesTable } from "../../../MovesTable/MovesTable";

const FREQUENCY_MAP: Record<string, number> = {
  Novice: 1,
  Learner: 2,
  Apprentice: 3,
  Challenger: 4,
  Strategist: 6,
  Expert: 8,
  Master: 10,
  Grandmaster: 12,
};

export default function PlayVsComputer() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const {
    game,
    engine,
    history,
    chessboardProps,
    toggleAutoPromoteToQueen,
    toggleBoardOrientation,
    setBoardOrientation,
    setPosition,
    setHighlightedSquares,
    handleToggleShowEnableMoves,
    updateHistory,
  } = useChessboard({ onPieceDrop, id: "PlayVsComputerBoard" });

  const location = useLocation();
  const { level, color } = location.state || {
    level: "Novice",
    color: "white",
  };
  const stockfishLevel = 1;
  const [playerColor, setPlayerColor] = useState<string | null>(null);
  const [moveCounter, setMoveCounter] = useState(1);

  function onPieceDrop() {
    updateHistory()
    handleComputerMove();
    return true;
  }

  useEffect(() => {
    if (color === "random") {
      const chosenColor = Math.random() < 0.5 ? "white" : "black";
      setPlayerColor(chosenColor);
      setBoardOrientation(chosenColor);
    } else {
      setPlayerColor(color);
      setBoardOrientation(color);
    }
  }, [color]);

  useEffect(() => {
    if (playerColor === "black") {
      handleComputerMove();
    }
  }, [playerColor]);

  const handleComputerMove = () => {
    const frequency = FREQUENCY_MAP[level];

    if (frequency === 1 || moveCounter % frequency === 1) {
      const possibleMoves = game.current.moves();
      const randomMove =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      const move = game.current.move(randomMove);

      if (move) {
        setTimeout(() => {
          setPosition(game.current.fen());
          setMoveCounter((prevCounter) => prevCounter + 1);
          updateHistory();
          const sourceSquareComputer = move.from;
          const targetSquareComputer = move.to;

          setHighlightedSquares({
            [sourceSquareComputer]: {
              backgroundColor: "rgba(255, 255, 0, 0.4)",
            },
            [targetSquareComputer]: {
              backgroundColor: "rgba(255, 255, 0, 0.4)",
            },
          });
        }, 1000);
      }
      return;
    }
    // Ruch obliczony przez Stockfisha z opóźnieniem
    engine.current.evaluatePosition(game.current.fen(), stockfishLevel);
    engine.current.onMessage(({ bestMove }) => {
      if (bestMove) {
        const move = game.current.move(bestMove);
        setTimeout(() => {
          if (move) {
            setPosition(game.current.fen());
            setMoveCounter((prevCounter) => prevCounter + 1);
            updateHistory();
            const sourceSquareComputer = move.from;
            const targetSquareComputer = move.to;

            setHighlightedSquares({
              [sourceSquareComputer]: {
                backgroundColor: "rgba(255, 255, 0, 0.4)",
              },
              [targetSquareComputer]: {
                backgroundColor: "rgba(255, 255, 0, 0.4)",
              },
            });
          }
        }, 1000);
      }
    });
  };

  return (
    <Box sx={style.TrainingPageLayout}>
      <Box sx={style.OptionsTile}>
        {!isMobile && (
          <Buttons
            handleBoardOrientationChange={toggleBoardOrientation}
            handleAutoPromoteToQueen={toggleAutoPromoteToQueen}
            handleToggleShowEnableMoves={handleToggleShowEnableMoves}
          />
        )}
      </Box>
      <Grid padding={"50px"} container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} sx={style.firstColumn}>
          <Box sx={style.Chessboard}>
            <Chessboard {...chessboardProps}/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} sx={style.secondColumn}>
          <MovesTable history={history} />
        </Grid>
      </Grid>
    </Box>
  );
}
