import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import * as style from "./DailyPuzzleHomePage.style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Puzzle } from "../PuzzleTypes";
import useDailyPuzzle from "../../../../hooks/useDailyPuzzle";

export default function DailyPuzzleHomePage() {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);

  useDailyPuzzle(setPuzzle);
  
  return (
    <Box sx={style.Chessboard}>
      <Link to={"/daily-chess-puzzle"} component={RouterLink} underline="none">
        <Box sx={style.TextAndIcon}>
          <Typography>Solve daily puzzle!</Typography>
          <ArrowForwardIosIcon sx={style.Icon} />
        </Box>
        {puzzle && puzzle.image !== null && (
          <img
            src={puzzle.image}
            alt="Chess Puzzle"
            style={style.PuzzleImage}
          />
        )}
      </Link>
    </Box>
  );
}
