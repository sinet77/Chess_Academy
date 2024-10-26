import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";
import { SquareStyles } from "./PuzzleExercise.types";

export default function PuzzlesExercise() {
  const [fen, setFen] = useState<string>("start");
  const [moves, setMoves] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(false);
  const [chess] = useState<Chess>(new Chess());
  const [loading, setLoading] = useState<boolean>(false);
  const [startingColor, setStartingColor] = useState<string>("");
  const [highlightedSquares, setHighlightedSquares] = useState<SquareStyles>(
    {}
  );
  const [rightClickedSquares, setRightClickedSquares] = useState<SquareStyles>(
    {}
  );
  const [optionSquares, setOptionSquares] = useState<SquareStyles>({});

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
      console.log("Ruchy", puzzle.moves);

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

  function getStartingColorForPlayer(fen: string) {
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
    const apiMove = moves[moveIndex];

    const isPromotionMove = apiMove.length === 5;

    let isValidMove = false;

    if (isPromotionMove) {
      const possiblePromotions = ["q", "r", "b", "n"];
      const convertedMoveFromSANToAPIFormat = sourceSquare + targetSquare;

      isValidMove = possiblePromotions.some((promotion) => {
        const apiMoveWithPromotion =
          convertedMoveFromSANToAPIFormat + promotion;
        return apiMove === apiMoveWithPromotion;
      });
    } else {
      isValidMove = apiMove === sourceSquare + targetSquare;
    }

    if (isValidMove) {
      setCurrentMoveIndex(moveIndex + 1);

      setHighlightedSquares({
        [sourceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
        [targetSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
      });

      setIsPlayerTurn(false);

      const blackMoveIndex = moveIndex + 1;
      if (blackMoveIndex < moves.length) {
        setIsPlayerTurn(false);
        setTimeout(() => {
          const blackMove = moves[blackMoveIndex];
          chess.move(blackMove);
          setCurrentMoveIndex(blackMoveIndex + 1);
          setFen(chess.fen());
          setIsPlayerTurn(true);
        }, 500);
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
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, currentMoveIndex, moves]);

  function onSquareRightClick(square: Square) {
    const color = "rgba(254,46,46, 0.4)";
    const isRightClicked =
      rightClickedSquares[square]?.backgroundColor === color;

    setRightClickedSquares((prevState) => ({
      ...prevState,
      [square]: isRightClicked
        ? { backgroundColor: "transparent" }
        : { backgroundColor: color },
    }));
  }

  function getMoveOptions(square: Square) {
    const moves = chess.moves({
      square,
      verbose: true,
    });
    if (moves.length === 0) {
      return;
    }

    const newSquares: SquareStyles = {};
    moves.map((move) => {
      newSquares[move.to] = {
        background:
          chess.get(move.to) &&
          chess.get(move.to).color !== chess.get(square).color
            ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
      return move;
    });
    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };
    setOptionSquares(newSquares);
  }

  function onMouseOverSquare(square: Square) {
    getMoveOptions(square);
  }

  function onMouseOutSquare() {
    if (Object.keys(optionSquares).length !== 0) {
      setOptionSquares({});
    }
  }

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
              customSquareStyles={{
                ...highlightedSquares,
                ...rightClickedSquares,
                ...optionSquares,
              }}
              onMouseOverSquare={onMouseOverSquare}
              onMouseOutSquare={onMouseOutSquare}
              onSquareRightClick={onSquareRightClick}
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
