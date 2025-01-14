import { Box, Grid } from "@mui/material";
import { Chess } from "chess.js";
import { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import * as style from "./PlayerVsComputer.style";
import Engine from "../../../../Engine/engine";
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
import { MovePair, SquareStyles } from "./PlayerVsComputer.types";

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
  const location = useLocation();
  const { level, color } = location.state;
  const stockfishLevel = 1;

  const playerColor =
    color === "random" ? (Math.random() < 0.5 ? "white" : "black") : color;

  const engineRef = useRef(new Engine());
  const gameRef = useRef(new Chess());

  const engine = engineRef.current;
  const game = gameRef.current;

  const [gamePosition, setGamePosition] = useState(game.fen());
  const [moveCounter, setMoveCounter] = useState(1);
  const [history, setHistory] = useState<MovePair[]>([]);
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");
  const [autoPromoteToQueen, setAutoPromoteToQueen] = useState<boolean>(false);
  const [highlightedSquares, setHighlightedSquares] = useState<SquareStyles>(
    {}
  );
  const [rightClickedSquares, setRightClickedSquares] = useState<SquareStyles>(
    {}
  );
  const [optionSquares, setOptionSquares] = useState<SquareStyles>({});
  const [isShowMovesEnabled, setIsShowMovesEnabled] = useState<boolean>(true);

  const handleBoardOrientation = () => {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  };

  const handleAutoPromoteToQueen = () => {
    setAutoPromoteToQueen((prevAutoPromoteToQueen) =>
      prevAutoPromoteToQueen === true ? false : true
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

  const getMoveOptions = (square: Square) => {
    const moves = game.moves({
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
          game.get(move.to) &&
          game.get(move.to)!.color !== game.get(square)!.color
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
  };

  const onMouseOverSquare = (square: Square) => {
    if (isShowMovesEnabled) {
      getMoveOptions(square);
    }
  };
  const onMouseOutSquare = () => {
    if (Object.keys(optionSquares).length !== 0) {
      setOptionSquares({});
    }
  };

  const handleToggleShowEnableMoves = () => {
    setIsShowMovesEnabled((prev) => !prev);
  };

  const updateHistory = () => {
    const currentHistory = game.history();
    const updatedHistory: MovePair[] = [];

    for (let i = 0; i < currentHistory.length; i += 2) {
      updatedHistory.push({
        white: currentHistory[i],
        black: currentHistory[i + 1] || "",
      });
    }

    setHistory(updatedHistory);
  };

  useEffect(() => {
    if (playerColor === "black") {
      handleComputerMove();
      setChangeBoardOrientation("black");
    }
  }, [playerColor]);

  const handleComputerMove = () => {
    const frequency = FREQUENCY_MAP[level];

    if (frequency === 1 || moveCounter % frequency === 1) {
      const possibleMoves = game.moves();
      const randomMove =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      const move = game.move(randomMove);

      if (move) {
        setTimeout(() => {
          setGamePosition(game.fen());
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
    engine.evaluatePosition(game.fen(), stockfishLevel);
    engine.onMessage(({ bestMove }) => {
      if (bestMove) {
        const move = game.move(bestMove);
        setTimeout(() => {
          if (move) {
            setGamePosition(game.fen());
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

  const onDrop = (sourceSquare: Square, targetSquare: Square) => {
    const move = game.move({
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
    setGamePosition(game.fen());
    handleComputerMove();
    return true;
  };

  return (
    <Box sx={style.TrainingPageLayout}>
      <Box sx={style.OptionsTile}>
        <Buttons
          handleBoardOrientationChange={handleBoardOrientation}
          handleAutoPromoteToQueen={handleAutoPromoteToQueen}
          handleToggleShowEnableMoves={handleToggleShowEnableMoves}
        />
      </Box>
      <Grid padding={"50px"} container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} sx={style.firstColumn}>
          <Box sx={style.Chessboard}>
            <Chessboard
              id="BasicChessboard"
              position={gamePosition}
              boardOrientation={changeBoardOrientation}
              onPieceDrop={onDrop}
              arePiecesDraggable={true}
              autoPromoteToQueen={autoPromoteToQueen}
              customDarkSquareStyle={{ backgroundColor: "#607d8b" }}
              customLightSquareStyle={{ backgroundColor: "#e0e0e0" }}
              onSquareRightClick={onSquareRightClick}
              onMouseOverSquare={onMouseOverSquare}
              onMouseOutSquare={onMouseOutSquare}
              customSquareStyles={{
                ...highlightedSquares,
                ...rightClickedSquares,
                ...optionSquares,
              }}
            />
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
