import { useEffect, useState } from "react";
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
import { Square } from "react-chessboard/dist/chessboard/types";
import { routes } from "../../routes.ts";
import { useChessboard } from "../../hooks/useChessboard.ts";

const STOCKFISHLEVEL = 4;

export default function PawnsGame() {
  const location = useLocation();
  const { startingFen } = location.state;

  const {
    game,
    engine,
    chessboardProps,
    setBoardOrientation,
    boardOrientation,
    setPosition,
    setHighlightedSquares,
    handleToggleShowEnableMoves,
  } = useChessboard({ onPieceDrop, id: "PawnsGameBoard" });

  const [gameOver, setGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [arePiecesDraggable, setArePiecesDraggable] = useState(true);

  const handleBoardOrientation = () => {
    const newOrientation = boardOrientation === "white" ? "black" : "white";
    setBoardOrientation(newOrientation);

    if (newOrientation === "black" && !gameOver) {
      handleComputerMove();
    }
  };

  const resetGame = () => {
    game.current.load(startingFen);
    setPosition(startingFen);
    setBoardOrientation("white");
    setGameOver(false);
    setIsGameStarted(false);
    setArePiecesDraggable(true);
    setHighlightedSquares({});
    if (boardOrientation === "black") {
      setBoardOrientation("white");
    }
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
      return piece?.color === "w" && ["p", "q"].includes(piece?.type);
    });

    if (whiteWins) {
      setGameOver(true);
      toast("White wins!");
      setArePiecesDraggable(false);
    }

    const blackWins = squaresForBlackToWin.some((square: Square) => {
      const piece = game.get(square);
      return piece?.color === "b" && ["p", "q"].includes(piece?.type);
    });

    if (blackWins) {
      setGameOver(true);
      toast("Black wins!");
      setArePiecesDraggable(false);
    }

    return null;
  };

  const handleComputerMove = () => {
    if (gameOver) return;
    setIsGameStarted(true);

    engine.current.evaluatePosition(game.current.fen(), STOCKFISHLEVEL);
    engine.current.onMessage(({ bestMove }) => {
      if (bestMove) {
        const move = game.current.move(bestMove);
        setTimeout(() => {
          if (move) {
            setPosition(game.current.fen());
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
            checkWinner(game.current);
          } else {
            console.error(`Invalid move attempted: ${bestMove}`);
          }
        }, 600);
      }
    });
  };

  useEffect(() => {
    game.current.load(startingFen);
    setPosition(startingFen);
  }, []);

  function onPieceDrop() {
    if (gameOver) return false;
    setIsGameStarted(true);
    setPosition(game.current.fen());
    checkWinner(game.current);
    handleComputerMove();
    return true;
  }

  useEffect(() => {
    const winner = checkWinner(game.current);
    if (winner) {
      toast(winner);
    }
  }, []);

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
              {...chessboardProps}
              arePiecesDraggable={arePiecesDraggable}
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
