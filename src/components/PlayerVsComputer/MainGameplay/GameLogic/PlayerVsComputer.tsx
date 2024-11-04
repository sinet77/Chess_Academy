import { Box } from "@mui/material";
import { Chess } from "chess.js";
import { useEffect, useMemo, useState } from "react";
import { Chessboard } from "react-chessboard";
import * as style from "./PlayerVsComputer.style";
import Engine from "../../../../Engine/engine";
import { useLocation } from "react-router-dom";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Buttons from "../Buttons/Buttons";

interface MovePair {
  white: string;
  black: string;
}

export default function PlayVsComputer() {
  const location = useLocation();
  const { level, color } = location.state;
  const stockfishLevel = 1;

  const playerColor =
    color === "random" ? (Math.random() < 0.5 ? "white" : "black") : color;

  const frequencyMap: Record<string, number> = {
    Novice: 1,
    Learner: 1,
    Apprentice: 2,
    Challenger: 2,
    Strategist: 3,
    Expert: 4,
    Master: 5,
    Grandmaster: 6,
  };

  const engine = useMemo(() => new Engine(), []);
  const game = useMemo(() => new Chess(), []);

  const [gamePosition, setGamePosition] = useState(game.fen());
  const [moveCounter, setMoveCounter] = useState(1);
  const [history, setHistory] = useState<MovePair[]>([]);
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");
  const [autoPromoteToQueen, setAutoPromoteToQueen] = useState<boolean>(false);

  function handleBoardOrientation() {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  }

  function handleAutoPromoteToQueen() {
    setAutoPromoteToQueen((prevAutoPromoteToQueen) =>
      prevAutoPromoteToQueen === true ? false : true
    );
  }

  function updateHistory() {
    const currentHistory = game.history();
    const updatedHistory: MovePair[] = [];

    for (let i = 0; i < currentHistory.length; i += 2) {
      updatedHistory.push({
        white: currentHistory[i],
        black: currentHistory[i + 1] || "",
      });
    }

    setHistory(updatedHistory);
  }

  useEffect(() => {
    if (playerColor === "black") {
      handleComputerMove();
      setChangeBoardOrientation("black");
    }
  }, [playerColor]);

  function handleComputerMove() {
    const frequency = frequencyMap[level];
    console.log(`Current moveCounter: ${moveCounter}`);

    if (frequency === 1 || moveCounter % frequency === 1) {
      const possibleMoves = game.moves();
      const randomMove =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      if (randomMove) {
        console.log(`Random move chosen: ${randomMove}`);
        setTimeout(() => {
          game.move(randomMove);
          setGamePosition(game.fen());
          setMoveCounter((prevCounter) => prevCounter + 1);
          updateHistory();
        }, 600);
      }
      return;
    }

    // Ruch obliczony przez Stockfisha z opóźnieniem
    engine.evaluatePosition(game.fen(), stockfishLevel);
    engine.onMessage(({ bestMove }) => {
      console.log(`Best move received: ${bestMove}`);
      if (bestMove) {
        setTimeout(() => {
          if (game.move(bestMove)) {
            setGamePosition(game.fen());
            setMoveCounter((prevCounter) => prevCounter + 1);
            updateHistory();
          } else {
            console.error(`Invalid move attempted: ${bestMove}`);
          }
        }, 600);
      }
    });
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? "q",
    });

    if (move === null) return false;
    updateHistory();
    setGamePosition(game.fen());
    handleComputerMove();
    return true;
  }

  return (
    <Box sx={style.TrainingPageLayout}>
      <Box sx={style.firstColumn}>
        <Buttons
          handleBoardOrientation={handleBoardOrientation}
          handleAutoPromoteToQueen={handleAutoPromoteToQueen}
        />
        <Box sx={style.Chessboard}>
          <Chessboard
            id="BasicChessboard"
            position={gamePosition}
            boardOrientation={changeBoardOrientation}
            onPieceDrop={onDrop}
            arePiecesDraggable={true}
            autoPromoteToQueen={autoPromoteToQueen}
            customDarkSquareStyle={{ backgroundColor: "#e0e0e0" }}
            customLightSquareStyle={{ backgroundColor: "#607d8b" }}
          />
        </Box>
      </Box>

      <Box sx={style.secondColumn}>
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
      </Box>
    </Box>
  );
}
