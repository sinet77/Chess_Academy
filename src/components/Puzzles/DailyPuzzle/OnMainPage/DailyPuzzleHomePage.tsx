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
        <Box
          sx={{
            padding: "10px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            position: "relative",
            display: "flex",
          }}
        >
          <Typography>Solve daily puzzle!</Typography>
          <ArrowForwardIosIcon
            sx={{ color: "white", position: "absolute", right: "10px" }}
          />
        </Box>
        {puzzle && puzzle.image !== null && (
          <img
            src={puzzle.image}
            alt="Chess Puzzle"
            style={{ maxWidth: "100%" }}
          />
        )}
      </Link>
    </Box>
  );
}
