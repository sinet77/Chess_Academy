import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";
import { Button } from "@mui/material";
import { MovePair } from "../ChessBoardDisplay.types";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";

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

  const onPieceDrop = (
    sourceSquare: Square,
    targetSquare: Square,
    piece: Piece
  ): boolean => {
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // domyślna promocja pionka na hetmana
    });

    if (move === null) return false; // Nieprawidłowy ruch

    setFen(chess.fen());

    const currentHistory = chess.history();
    const updatedHistory: MovePair[] = [];

    // Grupowanie ruchów białych i czarnych
    for (let i = 0; i < currentHistory.length; i += 2) {
      updatedHistory.push({
        white: currentHistory[i],
        black: currentHistory[i + 1] || "",
      });
    }

    setHistory(updatedHistory);
    return true;
  };

  return (
    <div style={{ width: "400px" }}>
      <Chessboard
        id="BasicChessboard"
        position={fen}
        boardOrientation={changeBoardOrientation}
        onPieceDrop={onPieceDrop} // Zmienione na prawidłowy typ
        arePiecesDraggable={true}
      />
      <div>
        <Button onClick={handleBoardOrientation}>Swap</Button>
        <h3>Historia ruchów:</h3>
        <table>
          <thead>
            <tr>
              <th>Ruch</th>
              <th>Białe</th>
              <th>Czarne</th>
            </tr>
          </thead>
          <tbody>
            {history.map((move, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{move.white}</td>
                <td>{move.black}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
