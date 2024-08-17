import { Box } from "@mui/material";
import "./App.css";
import ChessboardDisplay from "./components/ChessBoardDisplay";

export default function App() {
  return (
    <Box className="main">
      <ChessboardDisplay />
    </Box>
  );
}
