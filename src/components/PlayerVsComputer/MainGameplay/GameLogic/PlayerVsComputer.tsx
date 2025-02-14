import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import * as style from "./PlayerVsComputer.style";
import { useLocation } from "react-router-dom";
import { Square } from "react-chessboard/dist/chessboard/types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Buttons from "../Buttons/Buttons";
import { useChessboard } from "../../../../hooks/useChessboard";
import useMediaQuery from "@mui/material/useMediaQuery";

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

  const onPieceDrop = (sourceSquare: Square, targetSquare: Square) => {
    const move = game.current.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;
    setHighlightedSquares({
      [sourceSquare]: { backgroundColor: "#b2aa5e" },
      [targetSquare]: { backgroundColor: "#ccd285" },
    });

    updateHistory();
    setPosition(currentPosition);
    handleComputerMove();
    return true;
  };

  const {
    game,
    engine,
    history,
    chessboardProps,
    currentPosition,
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
      console.log("Changing board orientation to black");
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
          setPosition(currentPosition);
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
        }, 600);
      }
      return;
    }
    // Ruch obliczony przez Stockfisha z opóźnieniem
    engine.current.evaluatePosition(currentPosition, stockfishLevel);
    engine.current.onMessage(({ bestMove }) => {
      if (bestMove) {
        const move = game.current.move(bestMove);
        setTimeout(() => {
          if (move) {
            setPosition(currentPosition);
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
        }, 600);
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
            <Chessboard {...chessboardProps} onPieceDrop={onPieceDrop} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} sx={style.secondColumn}>
          <h3>Moves history:</h3>
          <TableContainer sx={style.Table} component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={style.MainRow}>
                  <TableCell sx={style.moveColumn}>Move</TableCell>
                  <TableCell sx={style.WhiteAndBlackColumn}>White</TableCell>
                  <TableCell sx={style.WhiteAndBlackColumn}>Black</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {history.map((move, index) => (
                  <TableRow key={index}>
                    <TableCell sx={style.moveColumn}>{index + 1}</TableCell>
                    <TableCell sx={style.WhiteAndBlackColumn}>
                      {move.white}
                    </TableCell>
                    <TableCell sx={style.WhiteAndBlackColumn}>
                      {move.black}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
