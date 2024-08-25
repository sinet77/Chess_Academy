import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function ChessboardDisplay() {
  const [chess] = useState<Chess>(new Chess()); // Tworzymy instancję Chess
  const [fen, setFen] = useState<string>(chess.fen()); // Stan do przechowywania FEN (pozycja szachowa)

  function handleBoardOrientation() {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  }

  useEffect(() => {
    const makeRandomMove = () => {
      if (!chess.isGameOver()) {
        const moves = chess.moves();
        const move = moves[Math.floor(Math.random() * moves.length)];
        chess.move(move);
        setFen(chess.fen()); // Aktualizacja FEN, aby odświeżyć szachownicę
      }
    };

    const intervalId = setInterval(makeRandomMove, 100000); // Co 1 sekundę wykonuje losowy ruch

    return () => clearInterval(intervalId);
  }, [chess]);

  return (
    <div style={{ width: "400px" }}>
      <Chessboard
        id="BasicChessboard"
        position={fen}
        arePiecesDraggable={false}
      />
    </div>
  );
}
