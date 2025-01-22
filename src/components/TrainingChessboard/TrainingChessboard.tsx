import { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Box, Button, Grid } from "@mui/material";
import { Square } from "react-chessboard/dist/chessboard/types";
import UndoIcon from "@mui/icons-material/Undo";
import SettingsIcon from "@mui/icons-material/Settings";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as style from "./TrainingChessBoard.style";
import Pgn from "./Pgn";
import Options from "./Options";
import Fen from "./Fen";
import Engine from "../../Engine/engine";
import PositionEvaluationBar from "./PositionEvaluationBar/PositionEvaluationBar";
interface MovePair {
  white: string;
  black: string;
}
export default function TrainingChessBoard() {
  const engine = useRef(new Engine());
  const game = useRef(new Chess());
  const [chessBoardPosition, setChessBoardPosition] = useState<string>(
    game.current.fen()
  );
  const [positionEvaluation, setPositionEvaluation] = useState<number>(0);
  const [depth, setDepth] = useState<number>(10);
  const [bestLine, setBestline] = useState<string>("");
  const [possibleMate, setPossibleMate] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [history, setHistory] = useState<MovePair[]>([]);
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");
  const [autoPromoteToQueen, setAutoPromoteToQueen] = useState<boolean>(false);
  const [gameOverMessage, setGameOverMessage] = useState<string | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const findBestMove = () => {
    engine.current.evaluatePosition(chessBoardPosition, 18);
    engine.current.onMessage(
      ({
        positionEvaluation,
        possibleMate,
        pv, //principal variation - best line
        depth,
      }: {
        positionEvaluation?: string;
        possibleMate?: string;
        pv?: string;
        depth?: number;
      }) => {
        if (depth && depth < 10) return;
        positionEvaluation &&
          setPositionEvaluation(
            ((game.current.turn() === "w" ? 1 : -1) *
              Number(positionEvaluation)) /
              100
          );
        possibleMate && setPossibleMate(possibleMate);
        depth && setDepth(depth);
        pv && setBestline(pv);
      }
    );
  };

  const handleBoardOrientation = () => {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  };

  const handleAutoPromoteToQueen = () => {
    setAutoPromoteToQueen((prevAutoPromoteToQueen) =>
      prevAutoPromoteToQueen === true ? false : true
    );
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

  const undoMove = () => {
    game.current.undo();
    setChessBoardPosition(game.current.fen());
    updateHistory();
  };

  const onPieceDrop = (sourceSquare: Square, targetSquare: Square): boolean => {
    const move = game.current.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });
    setPossibleMate("");
    setChessBoardPosition(game.current.fen());
    updateHistory();
    if (move === null) return false;
    engine.current.stop();
    setBestline("");
    if (game.current.isCheckmate()) {
      setGameOverMessage("Mated");
    } else if (game.current.isDraw()) {
      setGameOverMessage("Draw");
    } else {
      setGameOverMessage(null);
    }

    return true;
  };

  useEffect(() => {
    if (!game.current.isGameOver() || game.current.isDraw()) {
      findBestMove();
    }
  }, [chessBoardPosition]);

  const handleFenChange = (newFen: string) => {
    setChessBoardPosition(newFen);
    updateHistory();
  };

  const handleClearTheBoard = () => {
    game.current.clear();
    setChessBoardPosition(game.current.fen());
  };

  const handleResetTheBoard = () => {
    game.current.reset();
    setChessBoardPosition(game.current.fen());
  };

  const evaluationText = gameOverMessage
    ? `Game over: ${gameOverMessage}`
    : possibleMate
    ? `Mate in #${possibleMate}`
    : `Position Evaluation: ${positionEvaluation}; Depth: ${depth}`;

  return (
    <Box>
      <Box sx={style.TrainingPageLayout}>
        <Grid padding={"50px"} container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} sx={style.firstColumn}>
            <h4>{evaluationText}</h4>
              <h5>
                Best line: <i>{bestLine.slice(0, 40)}</i> ...
              </h5>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <PositionEvaluationBar
                positionEvaluation={positionEvaluation}
                possibleMate={possibleMate}
                gameOverMessage={gameOverMessage}
              />
              <Box sx={style.Chessboard}>
                <Chessboard
                  id="AnalysisBoard"
                  position={chessBoardPosition}
                  boardOrientation={changeBoardOrientation}
                  onPieceDrop={onPieceDrop}
                  arePiecesDraggable={true}
                  autoPromoteToQueen={autoPromoteToQueen}
                  customDarkSquareStyle={{ backgroundColor: "#607d8b" }}
                  customLightSquareStyle={{ backgroundColor: "#e0e0e0" }}
                />
              </Box>
            </Box>

            <Pgn chess={game.current} onFenChange={handleFenChange} />
            <Fen chess={game.current} onFenChange={handleFenChange} />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6} sx={style.secondColumn}>
            <Box sx={style.Items}>
            <Button
                sx={style.UndoButton}
                startIcon={<UndoIcon />}
                onClick={undoMove}
              >
                Undo
              </Button>
              <Button sx={style.ButtonPgn}
                variant="contained"
                endIcon={<SettingsIcon />}
                onClick={handleOpen}
              >
                Settings
              </Button>
              <Options
                open={open}
                handleClose={handleClose}
                handleBoardOrientation={handleBoardOrientation}
                clearBoard={handleClearTheBoard}
                resetBoard={handleResetTheBoard}
                handleAutoPromoteToQueen={handleAutoPromoteToQueen}
              />
            </Box>

            <h3>Moves history:</h3>
            <TableContainer sx={style.Table} component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={style.MainRow}>
                    <TableCell sx={style.moveColumn}>Move</TableCell>
                    <TableCell sx={style.WhiteAndBlackColumn}>White</TableCell>
                    <TableCell sx={style.WhiteAndBlackColumn}>Black</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {history.map((move, index) => (
                    <TableRow key={index}>
                      <TableCell sx={style.moveColumn}>{index + 1}</TableCell>
                      <TableCell sx={style.WhiteAndBlackColumn}>
                        {move.white}
                      </TableCell>
                      <TableCell sx={style.WhiteAndBlackColumn}>
                        {move.black}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
