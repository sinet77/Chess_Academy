import {
  Box,
  Button,
  Modal,
  Switch,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import UndoIcon from "@mui/icons-material/Undo";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FlagIcon from "@mui/icons-material/Flag";
import CloseIcon from "@mui/icons-material/Close";
import * as style from "./TrainingChessBoard.style";

interface OptionsProps {
  open: boolean;
  handleClose: () => void;
  handleBoardOrientation: () => void;
  undoMove: () => void;
  clearBoard: () => void;
  resetBoard: () => void;
  handleAutoPromoteToQueen: () => void;
}

export default function Options({
  open,
  handleClose,
  handleBoardOrientation,
  undoMove,
  clearBoard,
  resetBoard,
  handleAutoPromoteToQueen,
}: OptionsProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style.modalStyle}>
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Button
          sx={style.Button}
          startIcon={<SwapVertIcon />}
          onClick={handleBoardOrientation}
        >
          Swap
        </Button>
        <Button sx={style.Button} startIcon={<UndoIcon />} onClick={undoMove}>
          Undo
        </Button>
        <Button
          sx={style.Button}
          startIcon={<RestartAltIcon />}
          onClick={clearBoard}
        >
          Clear
        </Button>
        <Button sx={style.Button} startIcon={<FlagIcon />} onClick={resetBoard}>
          Start position
        </Button>
        <FormControlLabel
          control={
            <Switch color="warning" onChange={handleAutoPromoteToQueen} />
          }
          label="Enable auto promotion to queen"
        />
      </Box>
    </Modal>
  );
}
