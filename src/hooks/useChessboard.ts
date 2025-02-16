import { ComponentProps, useCallback, useMemo, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { useAuth } from "../context/authContext";
import Engine from "../Engine/engine";
import { Chess, Square } from "chess.js";
import { Piece } from "react-chessboard/dist/chessboard/types";

type Props = ComponentProps<typeof Chessboard>;

interface SquareStyles {
  [key: string]: {
    backgroundColor?: string;
    background?: string;
    borderRadius?: string;
  };
}

interface MovePair {
  white: string;
  black: string;
}

type ReturnsType = {
  chessboardProps: Props;
  currentPosition: string;
  engine: React.MutableRefObject<Engine>;
  history: MovePair[];
  game: React.MutableRefObject<Chess>;
  clearBoard: () => void;
  toggleBoardOrientation: () => void;
  setBoardOrientation: (value: "white" | "black") => void;
  setHighlightedSquares: (squares: SquareStyles) => void;
  setRightClickedSquares: (squares: SquareStyles) => void;
  toggleAutoPromoteToQueen: () => void;
  handleToggleShowEnableMoves: () => void;
  isShowMovesEnabled: boolean;
  resetBoard: () => void;
  undoMove: () => void;
  setPosition: (fen: string) => void;
  updateHistory: () => void;
};

export const useChessboard = ({
  onPieceDrop,
  ...props
}: Props): ReturnsType => {
  const engine = useRef(new Engine());
  const game = useRef(new Chess());

  const { currentUser } = useAuth();

  const [boardOrientation, setBoardOrientation] = useState<"white" | "black">(
    "white"
  );
  const [autoPromoteToQueen, setAutoPromoteToQueen] = useState<boolean>(false);
  const [highlightedSquares, setHighlightedSquares] = useState<SquareStyles>(
    {}
  );
  const [rightClickedSquares, setRightClickedSquares] = useState<SquareStyles>(
    {}
  );
  const [optionSquares, setOptionSquares] = useState<SquareStyles>({});
  const [isShowMovesEnabled, setIsShowMovesEnabled] = useState<boolean>(true);
  const [history, setHistory] = useState<MovePair[]>([]);
  const [fen, setFen] = useState<string>("start");

  const toggleBoardOrientation = useCallback(() => {
    setBoardOrientation((prev) => (prev === "white" ? "black" : "white"));
  }, []);

  const toggleAutoPromoteToQueen = useCallback(() => {
    setAutoPromoteToQueen((prev) => !prev);
  }, []);

  const handlePieceDrop = (
    sourceSquare: Square,
    targetSquare: Square,
    piece: Piece,

  ): boolean => {
    try {
      const move = game.current.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });

      if (onPieceDrop) {
        onPieceDrop(sourceSquare, targetSquare, piece);
        setHighlightedSquares({
          [sourceSquare]: { backgroundColor: "#b2aa5e" },
          [targetSquare]: { backgroundColor: "#ccd285" },
        });
      }

      if (move === null) return false;

      setFen(game.current.fen());
      engine.current.stop();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const updateHistory = () => {
    const currentHistory = game.current.history();
    const updatedHistory: MovePair[] = [];

    for (let i = 0; i < currentHistory.length; i += 2) {
      updatedHistory.push({
        white: currentHistory[i],
        black: currentHistory[i + 1] || "",
      });
    }

    setHistory(updatedHistory);
  };

  const setPosition = useCallback((fen: string) => {
    setFen(fen);

  }, []);

  const clearBoard = () => {
    game.current.clear();
    setFen(game.current.fen());
    setHighlightedSquares({});
  };

  const resetBoard = () => {
    game.current.reset();
    setFen(game.current.fen());
    setHighlightedSquares({});
  };

  const undoMove = () => {
    game.current.undo();
    setFen(game.current.fen());
    setHighlightedSquares({});
    updateHistory();
  };

  const customDarkSquareStyle: Props["customDarkSquareStyle"] = useMemo(
    () => ({
      background: currentUser?.chessboard?.darkSquare ?? "#607d8b",
    }),
    [currentUser?.chessboard?.darkSquare]
  );

  const customLightSquareStyle: Props["customLightSquareStyle"] = useMemo(
    () => ({
      background: currentUser?.chessboard?.lightSquare ?? "#e0e0e0",
    }),
    [currentUser?.chessboard?.lightSquare]
  );

  const onSquareRightClick = (square: Square) => {
    const color = "rgba(254,46,46, 0.4)";
    const isRightClicked =
      rightClickedSquares[square]?.backgroundColor === color;

    setRightClickedSquares((prevState) => ({
      ...prevState,
      [square]: isRightClicked
        ? { backgroundColor: "transparent" }
        : { backgroundColor: color },
    }));
  };

  const getMoveOptions = (square: Square) => {
    const moves = game.current.moves({
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
          game.current.get(move.to) &&
          game.current.get(move.to)!.color !== game.current.get(square)!.color
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
  };

  const onMouseOverSquare = (square: Square) => {
    if (isShowMovesEnabled) {
      getMoveOptions(square);
    }
  };
  const onMouseOutSquare = () => {
    if (Object.keys(optionSquares).length !== 0) {
      setOptionSquares({});
    }
  };

  const handleToggleShowEnableMoves = () => {
    setIsShowMovesEnabled((prev) => !prev);
  };

  return {
    engine,
    game,
    currentPosition: fen,
    history,
    chessboardProps: {
      arePiecesDraggable: true,
      autoPromoteToQueen,
      boardOrientation,
      customDarkSquareStyle,
      customLightSquareStyle,
      position: fen,
      onPieceDrop: handlePieceDrop,
      onSquareRightClick,
      onMouseOverSquare,
      onMouseOutSquare,
      customSquareStyles: {
        ...highlightedSquares,
        ...rightClickedSquares,
        ...optionSquares,
      },
      ...props,
    },
    clearBoard,
    resetBoard,
    undoMove,
    updateHistory,
    toggleBoardOrientation,
    toggleAutoPromoteToQueen,
    isShowMovesEnabled,
    handleToggleShowEnableMoves,
    setPosition,
    setBoardOrientation,
    setHighlightedSquares,
    setRightClickedSquares
  };
};
