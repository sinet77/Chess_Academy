import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Box, Button } from "@mui/material";
import { Square } from "react-chessboard/dist/chessboard/types";
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

interface MovePair {
  white: string;
  black: string;
}

export default function TrainingChessBoard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [chess] = useState<Chess>(new Chess());
  const [fen, setFen] = useState<string>(chess.fen());
  const [history, setHistory] = useState<MovePair[]>([]);
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");
  const [autoPromoteToQueen, setAutoPromoteToQueen] = useState<boolean>(false);

  function handleBoardOrientation() {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  }

  function handleAutoPromoteToQueen() {
    setAutoPromoteToQueen((prevAutoPromoteToQueen) =>
      prevAutoPromoteToQueen === true ? false : true
    );
  }

  function updateHistory() {
    const currentHistory = chess.history();
    const updatedHistory: MovePair[] = [];

    for (let i = 0; i < currentHistory.length; i += 2) {
      updatedHistory.push({
        white: currentHistory[i],
        black: currentHistory[i + 1] || "",
      });
    }

    setHistory(updatedHistory);
  }

  function undoMove() {
    chess.undo();
    setFen(chess.fen());
    updateHistory();
  }

  const onPieceDrop = (
    sourceSquare: Square,
    targetSquare: Square,

  ): boolean => {
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;

    setFen(chess.fen());
    updateHistory();
    return true;
  };

  const handleFenChange = (newFen: string) => {
    setFen(newFen);
    updateHistory();
  };

  const handleClearTheBoard = () => {
    chess.clear();
    setFen(chess.fen());
  };

  const handleResetTheBoard = () => {
    chess.reset();
    setFen(chess.fen());
  };

  return (
    <Box sx={style.TrainingPageLayout}>
      <Box sx={style.firstColumn}>
        <Box sx={style.Chessboard}>
          <Chessboard
            id="BasicChessboard"
            position={fen}
            boardOrientation={changeBoardOrientation}
            onPieceDrop={onPieceDrop}
            arePiecesDraggable={true}
            autoPromoteToQueen={autoPromoteToQueen}
            customDarkSquareStyle={{ backgroundColor: "#e0e0e0" }}
            customLightSquareStyle={{ backgroundColor: "#607d8b" }}
          />
        </Box>
        <Pgn chess={chess} onFenChange={handleFenChange} />
        <Fen chess={chess} onFenChange={handleFenChange} />
      </Box>

      <Box sx={style.secondColumn}>
        <Box>
          <Button
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
            undoMove={undoMove}
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
      </Box>
    </Box>
  );
}
