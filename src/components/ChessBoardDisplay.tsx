import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect, useState } from "react";

export default function ChessboardDisplay() {
  const [chess] = useState<Chess>(new Chess()); 
  const [fen, setFen] = useState<string>(chess.fen()); 

  useEffect(() => {
    const makeRandomMove = () => {
      if (!chess.isGameOver()) {
        const moves = chess.moves();
        const move = moves[Math.floor(Math.random() * moves.length)];
        chess.move(move);
        setFen(chess.fen()); 
      }
    };

    const intervalId = setInterval(makeRandomMove, 1000); 

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
