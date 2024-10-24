import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import * as style from "./DailyPuzzleHomePage.style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FetchDailyPuzzle from "../FetchDailyPuzzle";
import { useState } from "react";
import { Puzzle } from "../PuzzleTypes";

export default function DailyPuzzleHomePage() {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  return (
    <Box sx={style.Chessboard}>
      <Link to={"/daily-chess-puzzle"} component={RouterLink} underline="none">
        <FetchDailyPuzzle setPuzzle={setPuzzle} />
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
