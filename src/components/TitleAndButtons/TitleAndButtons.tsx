import { Box, Link, Typography } from "@mui/material";
import * as style from "./TitleAndButtons.style";
import { motion } from "framer-motion";
import { training, computer, puzzle } from "../../assets/MainPageImages.ts";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "../../routes.ts";
import DailyPuzzleHomePage from "../Puzzles/DailyPuzzle/OnMainPage/DailyPuzzleHomePage.tsx";

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
            Welcome in Chess Academy!
          </Typography>
        </Box>
      </motion.div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={style.TileContainer}>
          <Link
            to={routes.training}
            component={RouterLink}
            underline="hover"
          >
            <Box sx={style.ImageButtonContainer}>
              <img
                src={training}
                alt="Chessboard with a man playing"
                style={style.ButtonImage}
              />
              <Typography sx={style.TitleUnderButtonImage}>Training</Typography>
            </Box>
          </Link>
          <Link
            to={routes.chooseComputerLevel}
            component={RouterLink}
            underline="hover"
          >
            <Box sx={style.ImageButtonContainer}>
              <img
                src={computer}
                alt="Scared robot"
                style={style.ButtonImage}
              />
              <Typography sx={style.TitleUnderButtonImage}>
                Play vs computer
              </Typography>
            </Box>
          </Link>
          <Link
            to={routes.chooseDifficulty}
            component={RouterLink}
            underline="hover"
          >
            <Box sx={style.ImageButtonContainer}>
              <img src={puzzle} alt="Chess Puzzle" style={style.ButtonImage} />
              <Typography sx={style.TitleUnderButtonImage}>Puzzles</Typography>
            </Box>
          </Link>
          <DailyPuzzleHomePage />
        </Box>
      </motion.div>
    </Box>
  );
}
