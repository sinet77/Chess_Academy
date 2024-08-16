import { Box } from "@mui/material";
import "./App.css";
import ChessboardDisplay from "./components/ChessBoardDisplay";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Box className="main">

      <Navbar />
      <ChessboardDisplay />
      <Footer />
    </Box>
  );
}
