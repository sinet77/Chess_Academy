import { Box } from "@mui/material";
import chessMainPage from "../../assets/chess_homePage.jpg";
import * as style from "./HeadBackground.style";

function HeadBackground() {
  return (
    <Box sx={{ ...style.Main, backgroundImage: `url(${chessMainPage})` }}></Box>
  );
}

export default HeadBackground;
