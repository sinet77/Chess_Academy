import { useEffect,useState } from "react";
import { Chessboard } from "react-chessboard";
import { Box, Button, Grid } from "@mui/material";
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
import PositionEvaluationBar from "./PositionEvaluationBar/PositionEvaluationBar";
import { useChessboard } from "../../hooks/useChessboard";

export default function TrainingChessBoard() {

  function onPieceDrop() {
    setPossibleMate("");
    updateHistory();
    setBestline("");
    if (game.current.isCheckmate()) {
      setGameOverMessage("Mated");
    } else if (game.current.isDraw()) {
      setGameOverMessage("Draw");
    } else {
      setGameOverMessage(null);
    }

    return true;
  }
  const {
    game,
    engine,
    history,
    chessboardProps,
    currentPosition,
    clearBoard,
    toggleBoardOrientation,
    toggleAutoPromoteToQueen,
    resetBoard,
    undoMove,
    setPosition,
    handleToggleShowEnableMoves,
    updateHistory,
  } = useChessboard({ onPieceDrop, id: "AnalysisBoard" });

  const [positionEvaluation, setPositionEvaluation] = useState<number>(0);
  const [depth, setDepth] = useState<number>(10);
  const [bestLine, setBestline] = useState<string>("");
  const [possibleMate, setPossibleMate] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [gameOverMessage, setGameOverMessage] = useState<string | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const findBestMove = () => {
    engine.current.evaluatePosition(game.current.fen(), 18);
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


  useEffect(() => {
    if (!game.current.isGameOver() || game.current.isDraw()) {
      findBestMove();
      console.log(possibleMate);
      
    }
  }, [currentPosition]);

  const handleFenChange = (newFen: string) => {
    setPosition(newFen);
    updateHistory();
  };

  const evaluationText = gameOverMessage
    ? `Game over: ${gameOverMessage}`
    : possibleMate
    ? `Mate in #${possibleMate}`
    : `Position Evaluation: ${positionEvaluation}; Depth: ${depth}`;

  return (
    <Box>
      <Box sx={style.TrainingPageLayout}>
        <Grid padding={"50px"} container spacing={5}>
          <Grid item xs={12} sm={12} md={12} lg={7} sx={style.firstColumn}>
            <h4>{evaluationText}</h4>
            <h5>
              Best line: <i>{bestLine.slice(0, 30)}</i> ...
            </h5>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: {xs:"10px",md:"20px"},
              }}
            >
              <PositionEvaluationBar
                positionEvaluation={positionEvaluation}
                possibleMate={possibleMate}
                gameOverMessage={gameOverMessage}
              />
              <Box sx={style.Chessboard}>
                <Chessboard {...chessboardProps} />
              </Box>
            </Box>

            <Pgn chess={game.current} onFenChange={handleFenChange} />
            <Fen chess={game.current} onFenChange={handleFenChange} />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={5} sx={style.secondColumn}>
            <Box sx={style.Items}>
              <Button
                sx={style.UndoButton}
                startIcon={<UndoIcon />}
                onClick={undoMove}
              >
                Undo
              </Button>
              <Button
                sx={style.ButtonPgn}
                variant="contained"
                endIcon={<SettingsIcon />}
                onClick={handleOpen}
              >
                Settings
              </Button>
              <Options
                open={open}
                handleClose={handleClose}
                handleBoardOrientation={toggleBoardOrientation}
                clearBoard={clearBoard}
                resetBoard={resetBoard}
                handleAutoPromoteToQueen={toggleAutoPromoteToQueen}
                handleToggleShowEnableMoves={handleToggleShowEnableMoves}
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