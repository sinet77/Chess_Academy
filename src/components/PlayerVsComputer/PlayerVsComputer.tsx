import { Box } from "@mui/material";
import { Chess } from "chess.js";
import { useMemo, useState } from "react";
import { Chessboard } from "react-chessboard";
import * as style from "./PlayerVsComputer.style";
import Engine from "../../Engine/engine";

export default function PlayVsComputer() {
  const levels = {
    "Easy ": 1,
    "Medium ": 8,
    "Hard ": 18,
  };

  const engine = useMemo(() => new Engine(), []);
  const game = useMemo(() => new Chess(), []);

  const [gamePosition, setGamePosition] = useState(game.fen());
  const [stockfishLevel, setStockfishLevel] = useState(2);

  function findBestMove() {
    console.log(`Evaluating position at depth: ${stockfishLevel}`);
    engine.evaluatePosition(game.fen(), stockfishLevel);
    engine.onMessage(({ bestMove }) => {
      console.log(`Best move received: ${bestMove}`);
      if (bestMove) {
        const move = game.move(bestMove);
        if (move) {
          setGamePosition(game.fen());
        } else {
          console.error(`Invalid move attempted: ${bestMove}`);
        }
      }
    });
  }

  function onDrop(sourceSquare, targetSquare, piece) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? "q",
    });

    // illegal move
    if (move === null) return false;

    setGamePosition(game.fen());
    findBestMove(); // Wywołaj funkcję, aby komputer wykonał ruch
    return true;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        {Object.entries(levels).map(([level, depth]) => (
          <button
            key={depth}
            style={{
              backgroundColor: depth === stockfishLevel ? "#B58863" : "#f0d9b5",
            }}
            onClick={() => setStockfishLevel(depth)}
          >
            {level}
          </button>
        ))}
      </div>

      <Box sx={style.Chessboard}>
        <Chessboard
          id="BasicChessboard"
          position={gamePosition}
          onPieceDrop={onDrop}
        />
      </Box>
    </>
  );
}
