import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { Box } from "@mui/material";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import * as style from "./DisplayDailyPuzzle.style";

interface Puzzle {
  title: string;
  comments: string;
  url: string;
  fen: string;
  pgn: string;
  image: string;
}

export default function Puzzles({ puzzle }: { puzzle: Puzzle | null }) {
  const [chess] = useState<Chess>(new Chess());
  const [fen, setFen] = useState<string>("start");
  const [moves, setMoves] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);

  const cleanMove = (move: string): string | null => {
    // Usuwa numer ruchu, "x", "+", "!" i inne znaki, aby uzyskać czysty ruch
    const cleaned = move
      .replace(/^\d+\.\s*/, "")
      .replace(/[x+!?]/g, "")
      .trim();

    return cleaned || null;
  };

  useEffect(() => {
    if (puzzle && puzzle.fen) {
      chess.load(puzzle.fen);
      setFen(puzzle.fen);
    }

    if (puzzle && puzzle.pgn) {
      const pgn = puzzle.pgn;

      const pgnLines = pgn
        .split("\n")
        .filter((line) => !line.startsWith("[") && line.trim() !== "");

      const moves: string[] = [];

      pgnLines.forEach((line) => {
        const parts = line.split(" ");

        parts.forEach((part) => {
          if (
            (part.match(/^\d+\.\w+/) || !part.match(/^\d+\./)) &&
            part !== "*"
          ) {
            const cleanedMove = cleanMove(part);
            if (cleanedMove) {
              moves.push(cleanedMove);
            }
          }
        });
      });

      console.log("All moves (raw):", moves);
      console.log("Cleaned moves:", moves);

      setMoves(moves);
      setCurrentMoveIndex(0);
    }
  }, [puzzle]);

  const onPieceDrop = (
    sourceSquare: Square,
    targetSquare: Square,
    piece: Piece
  ): boolean => {
    const previousFen = chess.fen();

    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) {
      setFen(previousFen);
      return false;
    }

    setFen(chess.fen());

    if (currentMoveIndex < moves.length) {
      const blackMove = moves[currentMoveIndex];

      chess.move(blackMove);
      setFen(chess.fen());
      setCurrentMoveIndex(currentMoveIndex + 1);
    }

    return true;
  };

  return (
    <Box>
      <Box sx={style.Chessboard}>
        <Chessboard
          id="BasicChessboard"
          position={fen}
          onPieceDrop={onPieceDrop}
          arePiecesDraggable={true}
          customDarkSquareStyle={{ backgroundColor: "#e0e0e0" }}
          customLightSquareStyle={{ backgroundColor: "#607d8b" }}
        />
      </Box>
    </Box>
  );
}
