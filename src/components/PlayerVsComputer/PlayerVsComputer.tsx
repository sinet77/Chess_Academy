import { Box } from "@mui/material";
import { Chess } from "chess.js";
import { useMemo, useState } from "react";
import { Chessboard } from "react-chessboard";
import * as style from "./PlayerVsComputer.style";
import Engine from "../../Engine/engine";
import { useLocation } from "react-router-dom";

export default function PlayVsComputer() {
  const location = useLocation();
  const { level } = location.state;

  const levels = {
    "Easy ": 1,
    "Medium ": 8,
    "Hard ": 18,
  };

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
  const [stockfishLevel, setStockfishLevel] = useState(1);
  const [moveCounter, setMoveCounter] = useState(1);

  function handleComputerMove() {
    const frequency = frequencyMap[level];
    console.log(`Current moveCounter: ${moveCounter}`);

    if (frequency === 1 || moveCounter % frequency === 1) {
      const possibleMoves = game.moves();
      const randomMove =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      if (randomMove) {
        console.log(`Random move chosen: ${randomMove}`);
        game.move(randomMove);
        setGamePosition(game.fen());
        setMoveCounter(moveCounter + 1);
      }
      return;
    }

    // Ruch obliczony przez Stockfisha
    engine.evaluatePosition(game.fen(), stockfishLevel);
    engine.onMessage(({ bestMove }) => {
      console.log(`Best move received: ${bestMove}`);
      if (bestMove && game.move(bestMove)) {
        setGamePosition(game.fen());
        setMoveCounter(moveCounter + 1);
      } else {
        console.error(`Invalid move attempted: ${bestMove}`);
      }
    });
  }

  function onDrop(sourceSquare, targetSquare, piece) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? "q",
    });

    if (move === null) return false;

    setGamePosition(game.fen());
    handleComputerMove();
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
