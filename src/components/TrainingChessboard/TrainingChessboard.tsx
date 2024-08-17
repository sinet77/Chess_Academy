import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Box, Button } from "@mui/material";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as style from "./TrainingChessBoard.style";

interface MovePair {
  white: string;
  black: string;
}

export default function TrainingChessBoard() {
  const [chess] = useState<Chess>(new Chess());
  const [fen, setFen] = useState<string>(chess.fen());
  const [history, setHistory] = useState<MovePair[]>([]);
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");

  function handleBoardOrientation() {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  }

  function updateHistory() {
    const currentHistory = chess.history();
    const updatedHistory: MovePair[] = [];

    for (let i = 0; i < currentHistory.length; i += 2) {
      updatedHistory.push({
        white: currentHistory[i],
        black: currentHistory[i + 1] || "",
      });
    }

    setHistory(updatedHistory);
  }

  function undoMove() {
    chess.undo();
    setFen(chess.fen());
    updateHistory();
  }

  const onPieceDrop = (
    sourceSquare: Square,
    targetSquare: Square,
    piece: Piece
  ): boolean => {
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;

    setFen(chess.fen());
    updateHistory();
    return true;
  };

  return (
    <Box sx={style.TrainingPageLayout}>
      <Chessboard
        id="BasicChessboard"
        position={fen}
        boardOrientation={changeBoardOrientation}
        onPieceDrop={onPieceDrop}
        arePiecesDraggable={true}
        boardWidth={500}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Button onClick={handleBoardOrientation}>Swap</Button>
        <Button onClick={undoMove}>Undo</Button>
        <h3>Historia ruchów:</h3>
        <TableContainer sx={style.Table} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Move</TableCell>
                <TableCell>White</TableCell>
                <TableCell>Black</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((move, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{move.white}</TableCell>
                  <TableCell>{move.black}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
