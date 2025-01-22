import { Box, Link, Typography } from "@mui/material";
import * as style from "./TitleAndButtons.style";
import { motion } from "framer-motion";
import { training, computer, puzzle, pawns, vision } from "../../assets/MainPageImages.ts";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "../../routes.ts";
import DailyPuzzleHomePage from "../Puzzles/DailyPuzzle/OnMainPage/DailyPuzzleHomePage.tsx";

export default function TitleAndButtons() {
  return (
    <Box sx={{ paddingBlock: "100px", backgroundColor: "#0D0D0D" }}>
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
        <Box sx={{ display: "flex", justifyContent: "center", gap: "70px", alignItems: "center" }}>
        <Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
          <Link to={routes.training} component={RouterLink} underline="none">
            <Box sx={style.ImageButtonContainer}>
              <img
                src={training}
                alt="Chessboard with a man playing"
                style={style.ButtonImage}
              />
              <Typography sx={style.TitleUnderButtonImage}>Training</Typography>
            </Box>
          </Link>
          <Link to={routes.chooseComputerLevel} component={RouterLink} underline="none">
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
          <Link to={routes.chooseDifficulty} component={RouterLink} underline="none">
            <Box sx={style.ImageButtonContainer}>
              <img src={puzzle} alt="Chess Puzzle" style={style.ButtonImage} />
              <Typography sx={style.TitleUnderButtonImage}>Puzzles</Typography>
            </Box>
          </Link>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "40px" }}>
          <Link to={routes.chooseStartingPosition} component={RouterLink} underline="none">
            <Box sx={style.ImageButtonContainer}>
              <img
                src={pawns}
                alt="Game with pawns only"
                style={style.ButtonImage}
              />
              <Typography sx={style.TitleUnderButtonImage}>Pawns Game</Typography>
            </Box>
          </Link>
          <Link to={routes.vision} component={RouterLink} underline="none">
            <Box sx={style.ImageButtonContainer}>
              <img
                src={vision}
                alt="Vision game"
                style={style.ButtonImage}
              />
              <Typography sx={style.TitleUnderButtonImage}>Vision</Typography>
            </Box>
          </Link>
        </Box>
        </Box>
        <DailyPuzzleHomePage />
        </Box>
      </motion.div>
    </Box>
  );
}
