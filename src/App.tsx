import { Box } from "@mui/material";
import "./App.css";
import ChessboardDisplay from "./components/ChessBoardDisplay";
import Articles from "./components/Articles/Articles";

export default function App() {
  return (
    <Box className="main">
      <ChessboardDisplay />
      <Articles />
    </Box>
  );
}
