import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Chess } from "chess.js";
import * as style from "./TrainingChessBoard.style";

interface PgnProps {
  chess: Chess;
  onFenChange: (fen: string) => void;
}

export default function Pgn({ chess, onFenChange }: PgnProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    chess.loadPgn(inputValue);
    onFenChange(chess.fen());
  };

  return (
    <Box sx={style.Pgn}>
      <TextField
        sx={style.PgnInput}
        placeholder="PGN"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        sx={style.ButtonPgn}
        variant="contained"
        onClick={handleButtonClick}
      >
        Import PGN
      </Button>
    </Box>
  );
}
