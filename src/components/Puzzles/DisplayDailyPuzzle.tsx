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
    console.log(
      "Piece dropped:",
      piece,
      "from:",
      sourceSquare,
      "to:",
      targetSquare
    );

    const previousFen = chess.fen();

    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) {
      console.error(`Invalid move: ${sourceSquare} to ${targetSquare}`);
      setFen(previousFen);
      return false;
    }

    console.log("Move performed:", move.san);

    const sanitizedMove = cleanMove(move.san);

    const moveIndex = currentMoveIndex;

    console.log("Sanitized Move:", sanitizedMove);
    console.log("Expected Move (White):", moves[moveIndex]);

    if (sanitizedMove === moves[moveIndex]) {
      console.log("Dobry ruch białych:", move.san);

      setCurrentMoveIndex(moveIndex + 1);

      const blackMoveIndex = moveIndex + 1;
      if (blackMoveIndex < moves.length) {
        const blackMove = moves[blackMoveIndex];
        const moveBlack = chess.move(blackMove);

        if (!moveBlack) {
          console.error(`Invalid black move: ${blackMove}`);
          chess.undo();
        } else {
          console.log("Czarny ruch wykonany:", moveBlack.san);
          setCurrentMoveIndex(blackMoveIndex + 1);
        }
      }
    } else {
      console.error("Zły ruch białych:", move.san);
      chess.undo();
      setFen(previousFen);
    }

    setFen(chess.fen());

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
