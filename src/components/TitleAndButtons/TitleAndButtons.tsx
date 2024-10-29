import { Box, Button, Link, Typography } from "@mui/material";
import * as style from "./TitleAndButtons.style";
import { motion } from "framer-motion";
import { training, computer, puzzle } from "../../assets/MainPageImages.ts";
import { Link as RouterLink } from "react-router-dom";

export default function TitleAndButtons() {
  return (
    <Box>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={style.TileContainer}>
          <Link to={"/training"} component={RouterLink}>
            <Button sx={style.ImageButtonContainer}>
              <img
                src={training}
                alt="Chessboard with a man playing"
                style={style.ButtonImage}
              />
              <Typography sx={style.TitleUnderButtonImage}>Training</Typography>
            </Button>
          </Link>
          <Link to={"/play/computer"} component={RouterLink}>
            <Button sx={style.ImageButtonContainer}>
              <img
                src={computer}
                alt="Scared robot"
                style={style.ButtonImage}
              />
              <Typography sx={style.TitleUnderButtonImage}>
                Play vs computer
              </Typography>
            </Button>
          </Link>
          <Link to={"/puzzles"} component={RouterLink}>
            <Button sx={style.ImageButtonContainer}>
              <img src={puzzle} alt="Chess Puzzle" style={style.ButtonImage} />
              <Typography sx={style.TitleUnderButtonImage}>Puzzles</Typography>
            </Button>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
}
