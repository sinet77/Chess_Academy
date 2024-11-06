import { Box } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import ChessboardDisplay from "../../components/ChessBoardDisplay";
import * as style from "./LoginPage.style";

export default function LoginPage() {
  return (
    <Box sx={style.Main}>
      <LoginForm />
      <ChessboardDisplay />
    </Box>
  );
}
