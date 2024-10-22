import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { Box, List, ListItem, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import * as style from "./DisplayDailyPuzzle.style";
import { Puzzle } from "../PuzzleTypes";

export default function Puzzles({ puzzle }: { puzzle: Puzzle | null }) {
  const [chess] = useState<Chess>(new Chess());
  const [isMovable, setIsMovable] = useState(true);
  const [fen, setFen] = useState<string>("start");
  const [moves, setMoves] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [playedMoves, setPlayedMoves] = useState<
    { move: string; isValid: boolean }[]
  >([]);

  const resetGame = () => {
    if (puzzle && puzzle.fen) {
      chess.load(puzzle.fen);
      setFen(puzzle.fen);
    }
    setPlayedMoves([]);
    setCurrentMoveIndex(0);
    setIsMovable(true);
  };

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

    const moveDescription = move.san;

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
      setPlayedMoves((prevMoves) => [
        ...prevMoves,
        { move: move.san, isValid: true },
      ]);

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

      if (blackMoveIndex + 1 === moves.length) {
        setIsMovable(false);
        console.log("Wszystkie ruchy wykonane. Ruchy zostały zablokowane.");
      }
    } else {
      console.error("Zły ruch białych:", move.san);
      chess.undo();
      setFen(previousFen);

      setPlayedMoves((prevMoves) => [
        ...prevMoves,
        { move: moveDescription, isValid: false },
      ]);
    }

    setFen(chess.fen());

    return true;
  };

  return (
    <Box sx={style.Main}>
      <Box sx={style.Chessboard}>
        <Chessboard
          id="BasicChessboard"
          position={fen}
          onPieceDrop={onPieceDrop}
          arePiecesDraggable={isMovable}
          customDarkSquareStyle={{ backgroundColor: "#e0e0e0" }}
          customLightSquareStyle={{ backgroundColor: "#607d8b" }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <button
          onClick={resetGame}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Reset puzzle
        </button>
      </Box>
      <Box sx={style.Moves}>
        <Box sx={style.Title}>
          <Typography>Daily Puzzle</Typography>
          <ExtensionIcon sx={{ color: "white" }} />
        </Box>
        <List>
          {playedMoves.map((moveName, index) => (
            <ListItem key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF1A",
                  padding: "15px",
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                {moveName.isValid ? (
                  <CheckCircleIcon
                    sx={{
                      color: "#81B64C",
                      marginRight: 1,
                      backgroundColor: "",
                    }}
                  />
                ) : (
                  <CancelIcon sx={{ color: "red", marginRight: 1 }} />
                )}
                <Typography
                  sx={
                    moveName.isValid
                      ? {
                          color: "#81B64C",
                        }
                      : { color: "#FA412D" }
                  }
                >
                  {moveName.move}
                </Typography>
                {moveName.isValid ? (
                  <Typography
                    sx={{
                      color: "#81B64C",
                      marginLeft: 1,
                      fontWeight: "bold",
                    }}
                  >
                    is correct!
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      color: "#FA412D",
                      marginLeft: 1,
                      fontWeight: "bold",
                    }}
                  >
                    is not correct. Try again!
                  </Typography>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

//DODAC PRZYCISK SPROBUJ PONOWNIE, ZEBY COFNELO DO POCZATKOWEJ POZYCJI I ZRESETOWALO HISTORIE RUCHOW
// DODAC PRZYCISK POWROTU DO HOME
// DODAC DZWIEKI JAK JEST DOBRZE I JAK JEST ZLE
