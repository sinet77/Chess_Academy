import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";

export default function PuzzlesExercise() {
  const [fen, setFen] = useState("start");
  const [moves, setMoves] = useState([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [chess] = useState<Chess>(new Chess());
  const [loading, setLoading] = useState(false);
  const [startingColor, setStartingColor] = useState("");

  async function fetchPuzzle() {
    const url =
      "https://chess-puzzles2.p.rapidapi.com/range?min=100&max=1000&max_deviation=100&number_of_puzzles=1";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1c257a4e1amsh35b3beb37f3c084p1dca68jsna17c69e595e5",
        "x-rapidapi-host": "chess-puzzles2.p.rapidapi.com",
      },
    };
    setLoading(true);
    setMoves([]);
    setCurrentMoveIndex(0);

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const puzzle = data[0];
      setFen(puzzle.fen);
      setMoves(puzzle.moves);
      chess.load(puzzle.fen);
      setIsPlayerTurn(false);

      const color = getStartingColorForPlayer(puzzle.fen);
      setStartingColor(color === "White" ? "Black" : "White");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPuzzle();
  }, []);

  const executeComputerMove = () => {
    if (currentMoveIndex < moves.length) {
      const nextMove = moves[currentMoveIndex];
      chess.move(nextMove);
      setFen(chess.fen());
      setCurrentMoveIndex(currentMoveIndex + 1);
      setIsPlayerTurn(true);
    }
  };

  function getStartingColorForPlayer(fen) {
    const spliitedPartsInFenToGetAColor = fen.split(" ");
    return spliitedPartsInFenToGetAColor[1] === "w" ? "White" : "Black";
  }

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

    if (!move) {
      setFen(previousFen);
      return false;
    }

    console.log("Move performed:", move.san);

    const moveIndex = currentMoveIndex;

    const convertedMoveFromSANToAPIFormat = sourceSquare + targetSquare;

    if (convertedMoveFromSANToAPIFormat === moves[moveIndex]) {
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
        console.log("Wszystkie ruchy wykonane. Ruchy zostały zablokowane.");
      }
    } else {
      console.error("Zły ruch białych:", move.san);
      chess.undo();
      setFen(previousFen);
    }

    setFen(chess.fen());

    return true;
  };

  useEffect(() => {
    if (!isPlayerTurn && currentMoveIndex < moves.length) {
      const timer = setTimeout(() => {
        executeComputerMove();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, currentMoveIndex, moves]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{startingColor} on move</p>
          <div style={{ width: "400px" }}>
            <Chessboard
              id="PuzzleChessboard"
              position={fen}
              arePiecesDraggable={true}
              onPieceDrop={onPieceDrop}
            />
          </div>
          <button onClick={fetchPuzzle}>Next Puzzle</button>
        </div>
      )}
    </div>
  );
}

//[{"id": "QJ1c8", "fen": "2b3k1/1p6/6p1/q2pp1NP/1n5Q/1P6/5P2/1K1R3R w - - 4 28",
//"moves": ["h5g6", "a5a2", "b1c1", "a2c2"], "numberOfMoves": "4", "rating": "1318",
//"ratingDeviation": "77", "minRating": "1241", "maxRating": "1395",
//"themes": "mate mateIn2 middlegame short", "openingFamily": "no data", "openingVariation": "no data"}]
