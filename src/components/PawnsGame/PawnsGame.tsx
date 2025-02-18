import { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Switch,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import * as style from "./PawnsGame.style.ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Chess } from "chess.js";
import { SquareStyles } from "./PawnsGame.types.ts";
import { Square } from "react-chessboard/dist/chessboard/types";
import Engine from "../../Engine/engine.ts";
import { routes } from "../../routes.ts";

const STOCKFISHLEVEL = 4;

export default function PawnsGame() {
  const location = useLocation();
  const { startingFen } = location.state;

  const engineRef = useRef(new Engine());
  const gameRef = useRef(new Chess(startingFen));

  const engine = engineRef.current;
  const game = gameRef.current;

  const [gamePosition, setGamePosition] = useState(game.fen());
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
  const [gameOver, setGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleBoardOrientation = () => {
    setChangeBoardOrientation((prevBoardOrientation) => {
      const newOrientation =
        prevBoardOrientation === "white" ? "black" : "white";
      if (newOrientation === "black" && !gameOver) {
        handleComputerMove();
      }
      return newOrientation;
    });
  };

  const resetGame = () => {
    game.load(startingFen);
    setGamePosition(startingFen);
    setChangeBoardOrientation("white");
    setHighlightedSquares({});
    setRightClickedSquares({});
    setGameOver(false);
    setIsGameStarted(false);
    if (changeBoardOrientation === "black") {
      setChangeBoardOrientation("white");
    }
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
          game.get(move.to)!.color !== game.get(square)!.color
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

  const getWinnerSquares = (number: number): Square[] => {
    const squares = ["a", "b", "c", "d", "e", "f", "g", "h"];
    return squares.map((letter) => `${letter}${number}`) as Square[];
  };

  const checkWinner = (game: Chess) => {
    const squaresForWhiteToWin: Square[] = getWinnerSquares(8);
    const squaresForBlackToWin: Square[] = getWinnerSquares(1);
  
    const whiteWins = squaresForWhiteToWin.some((square: Square) => {
      const piece = game.get(square);
      return piece?.color === "w" && ["p","q"].includes(piece?.type);
    });
    console.log(whiteWins);
    
    if (whiteWins) {
      setGameOver(true);
      toast("White wins!");
      return "White wins!";
    }
  
    const blackWins = squaresForBlackToWin.some((square: Square) => {
      const piece = game.get(square);
      return piece?.color === "b" && ["p","q"].includes(piece?.type);
    });
    console.log(blackWins);
    
    if (blackWins) {
      setGameOver(true);
      toast("Black wins!");
      return "Black wins!";
    }
  
    return null;
  };
  

  const handleComputerMove = () => {
    if (gameOver) return;
    setIsGameStarted(true);

    engine.evaluatePosition(game.fen(), STOCKFISHLEVEL);
    engine.onMessage(({ bestMove }) => {
      if (bestMove) {
        const move = game.move(bestMove);
        setTimeout(() => {
          if (move) {
            setGamePosition(game.fen());
            const sourceSquareComputer = move.from;
            const targetSquareComputer = move.to;

            setHighlightedSquares({
              [sourceSquareComputer]: {
                backgroundColor: "rgba(255, 255, 0, 0.4)",
              },
              [targetSquareComputer]: {
                backgroundColor: "rgba(255, 255, 0, 0.4)",
              },
            });
            checkWinner(game);
          } else {
            console.error(`Invalid move attempted: ${bestMove}`);
          }
        }, 600);
      }
    });
  };

  const onDrop = (sourceSquare: Square, targetSquare: Square) => {
    if (gameOver) return false;

    setIsGameStarted(true);

    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;
    setHighlightedSquares({
      [sourceSquare]: { backgroundColor: "#b2aa5e" },
      [targetSquare]: { backgroundColor: "#ccd285" },
    });

    setGamePosition(game.fen());
    checkWinner(game);
    handleComputerMove();
    return true;
  };

  useEffect(() => {
    const winner = checkWinner(game);
    if (winner) {
      toast(winner);
    }
  }, [gamePosition]);

  return (
    <Box>
      <Grid container sx={style.Main}>
        <Grid container sx={style.Instruction}>
          <Box sx={style.Title}>
            <Link to={routes.chooseStartingPosition} component={RouterLink}>
              <ArrowBackIcon sx={style.ArrowBackIcon} />
            </Link>
            <Typography sx={style.TitleName}>Pawns Game</Typography>
          </Box>
          <Box sx={style.DescriptionContainer}>
            <Typography sx={style.Description}>
              Your mission is to reach the eighth rank as white or the first
              rank as black. The computer will try to beat you and fulfill the
              same victory conditions. Swap side if you want to play as black.
            </Typography>
          </Box>
          <ToastContainer />
        </Grid>
        <Grid item xs={12} md={9} sx={style.BoardAndButtons}>
          <Box sx={style.Chessboard}>
            <Chessboard
              id="BasicChessboard"
              position={gamePosition}
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
              sx={{
                ...style.Button,
                ...(isGameStarted && {
                  "&.Mui-disabled": {
                    backgroundColor: "grey",
                    color: "black",
                  },
                }),
              }}
              startIcon={<SwapVertIcon />}
              onClick={handleBoardOrientation}
              disabled={isGameStarted}
            >
              Swap
            </Button>
            <Button sx={style.Button} onClick={resetGame}>
              Reset
            </Button>
            <FormControlLabel
              control={
                <Switch
                  color="warning"
                  size="small"
                  onChange={handleToggleShowEnableMoves}
                />
              }
              label="Hide possible moves"
              sx={style.SwitchLabel}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
