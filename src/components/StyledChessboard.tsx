import { Chessboard } from "react-chessboard";
import { useAuth } from "../context/authContext";
import { ComponentProps, useState } from "react";

interface SquareStyles {
  [key: string]: {
    backgroundColor?: string;
    background?: string;
    borderRadius?: string;
  };
}

export default function StyledChessboard(
  props: ComponentProps<typeof Chessboard>
) {
  const [highlightedSquares, setHighlightedSquares] = useState<SquareStyles>(
    {}
  );
  const [rightClickedSquares, setRightClickedSquares] = useState<SquareStyles>(
    {}
  );
  const [optionSquares, setOptionSquares] = useState<SquareStyles>({});

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
          chess.get(move.to)!.color !== chess.get(square)!.color
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
  const { currentUser } = useAuth();
  return (
    <Chessboard
      customDarkSquareStyle={{
        backgroundColor: currentUser?.chessboard.darkSquare,
      }}
      customLightSquareStyle={{
        backgroundColor: currentUser?.chessboard.lightSquare,
      }}
      onSquareRightClick={onSquareRightClick}
      onMouseOverSquare={onMouseOverSquare}
      onMouseOutSquare={onMouseOutSquare}
      customSquareStyles={{
        ...highlightedSquares,
        ...rightClickedSquares,
        ...optionSquares,
      }}
      {...props}
    />
  );
}
