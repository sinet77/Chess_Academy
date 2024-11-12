import { useMemo, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as style from "./PawnsGame.style.ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Engine from "../../../../Engine/engine";
import { Chess } from "chess.js";
import { MovePair, SquareStyles } from "./PawnsGame.types.ts";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";

const FEN = "8/pppppppp/8/8/8/8/PPPPPPPP/8 w - - 0 1";

export default function Vision() {
  //   const engine = useMemo(() => new Engine(), []);
  const game = useMemo(() => new Chess(), []);

  const [gamePosition, setGamePosition] = useState(game.fen());
  const [history, setHistory] = useState<MovePair[]>([]);
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");
  const [highlightedSquares, setHighlightedSquares] = useState<SquareStyles>(
    {}
  );
  const [rightClickedSquares, setRightClickedSquares] = useState<SquareStyles>(
    {}
  );
  const [optionSquares, setOptionSquares] = useState<SquareStyles>({});
  const [isShowMovesEnabled, setIsShowMovesEnabled] = useState<boolean>(true);

  const handleBoardOrientation = () => {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  };

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
    const moves = game.moves({
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
          game.get(move.to) &&
          game.get(move.to).color !== game.get(square).color
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

  const getWinnerSquares = (number) => {
    const squares = ["a", "b", "c", "d", "e", "f", "g", "h"];
    return squares.map((letter) => `${letter}${number}`);
  };

  const squaresForWhiteToWin = getWinnerSquares(8);
  const squaresForBlackToWin = getWinnerSquares(1);

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? "q",
    });

    if (move === null) return false;
    setHighlightedSquares({
      [sourceSquare]: { backgroundColor: "#b2aa5e" },
      [targetSquare]: { backgroundColor: "#ccd285" },
    });

    setGamePosition(game.fen());
    handleComputerMove();
    return true;
  }

  return (
    <Box>
      <Box sx={style.Navbar}></Box>
      <Grid container sx={style.Main}>
        <Grid item xs={12} md={9} sx={style.BoardAndButtons}>
          <Box sx={style.TimerAndPoints}>
            <ToastContainer />
          </Box>
          <Box sx={style.Chessboard}>
            <Chessboard
              id="BasicChessboard"
              position={FEN}
              onPieceDrop={onDrop}
              boardOrientation={changeBoardOrientation}
              customNotationStyle={{ fontSize: "18px" }}
              customLightSquareStyle={{ backgroundColor: "#e0e0e0" }}
              customDarkSquareStyle={{ backgroundColor: "#607d8b" }}
              onSquareRightClick={onSquareRightClick}
              onMouseOverSquare={onMouseOverSquare}
              onMouseOutSquare={onMouseOutSquare}
              customSquareStyles={{
                ...highlightedSquares,
                ...rightClickedSquares,
                ...optionSquares,
              }}
            />
          </Box>
          <Box sx={style.ButtonsContainer}>
            <Button
              onClick={handleBoardOrientation}
              sx={{
                ...style.Button,
              }}
            >
              Swap orientation
            </Button>
            <Button
              sx={{
                ...style.Button,
              }}
            >
              Start
            </Button>
            <Button onClick={handleToggleShowEnableMoves}>
              Show enable moves
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} sx={style.Moves}>
          <Box sx={style.Title}>
            <Link to={"/"} component={RouterLink}>
              <ArrowBackIcon sx={style.ArrowBackIcon} />
            </Link>
            <Box sx={style.TitleContainer}>
              <Typography sx={style.TitleName}>Vision Training</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
