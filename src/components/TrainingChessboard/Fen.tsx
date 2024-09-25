import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Chess } from "chess.js";
import * as style from "./TrainingChessBoard.style";

interface PgnProps {
  chess: Chess;
  onFenChange: (fen: string) => void;
}

export default function Fen({ chess, onFenChange }: PgnProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    chess.load(inputValue);
    onFenChange(chess.fen());
  };

  return (
    <Box sx={style.Fen}>
      <TextField
        sx={style.PgnInput}
        placeholder="FEN"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        sx={style.ButtonFen}
        variant="contained"
        onClick={handleButtonClick}
      >
        Import FEN
      </Button>
    </Box>
  );
}
