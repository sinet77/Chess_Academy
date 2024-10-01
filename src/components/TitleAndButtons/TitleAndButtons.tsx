import { Box, Button, Typography } from "@mui/material";
import * as style from "./TitleAndButtons.style";

export default function TitleAndButtons() {
  return (
    <Box>
      <Box sx={style.Title}>
        <Typography>Welcome in chess academy!</Typography>
        <Typography>Choose starting options below</Typography>
      </Box>
      <Box sx={style.TileContainer}>
        <Button sx={style.ImageButtonContainer}>
          <img
            src="/src/assets/chess_puzzles.png"
            alt="Chess Puzzle"
            style={style.ButtonImage}
          />
          <Typography sx={style.TitleUnderButtonImage}>Training</Typography>
        </Button>
        <Button sx={style.ImageButtonContainer}>
          <img
            src="/src/assets/robot.jpg"
            alt="Chess Puzzle"
            style={style.ButtonImage}
          />
          <Typography sx={style.TitleUnderButtonImage}>
            Play vs computer
          </Typography>
        </Button>
        <Button sx={style.ImageButtonContainer}>
          <img
            src="/src/assets/puzzle.jpg"
            alt="Chess Puzzle"
            style={style.ButtonImage}
          />
          <Typography sx={style.TitleUnderButtonImage}>Puzzles</Typography>
        </Button>
      </Box>
    </Box>
  );
}
