import { Box, useMediaQuery } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import ChessboardDisplay from "../../components/ChessBoardDisplay";
import * as style from "./LoginPage.style";

export default function LoginPage() {
     const isMobile =useMediaQuery("(max-width:1000px)");
  return (
    <Box sx={style.Main}>
      <LoginForm />
      {!isMobile && <ChessboardDisplay />}
    </Box>
  );
}
