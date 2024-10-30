import { Box, Button, Typography } from "@mui/material";
import * as style from "./TitleAndButtons.style";
import { motion } from "framer-motion";
import { training, computer, puzzle } from "../../assets/MainPageImages.js";

export default function TitleAndButtons() {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={style.Title}>
          <Typography sx={style.TitleText}>
            Welcome in chess academy!
          </Typography>
          <Typography sx={style.SubtitleText}>
            Choose starting options below
          </Typography>
        </Box>
      </motion.div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={style.TileContainer}>
          <Button sx={style.ImageButtonContainer}>
            <img
              src={training}
              alt="Chessboard with a man playing"
              style={style.ButtonImage}
            />
            <Typography sx={style.TitleUnderButtonImage}>Training</Typography>
          </Button>
          <Button sx={style.ImageButtonContainer}>
            <img src={computer} alt="Chess Puzzle" style={style.ButtonImage} />
            <Typography sx={style.TitleUnderButtonImage}>
              Play vs computer
            </Typography>
          </Button>
          <Button sx={style.ImageButtonContainer}>
            <img src={puzzle} alt="Chess Puzzle" style={style.ButtonImage} />
            <Typography sx={style.TitleUnderButtonImage}>Puzzles</Typography>
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}
