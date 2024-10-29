import { Box } from "@mui/material";
import shatteredFigures from "../../assets/chess_homePage.jpg"; // Upewnij się, że ścieżka do obrazka jest poprawna

function HeadBackground() {
  return (
    <Box
      sx={{
        height: "635px", // Ustaw wysokość na stałą wartość
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${shatteredFigures})`, // Ustaw tło
        backgroundSize: "cover", // Dopasowanie tła
        backgroundPosition: "center", // Pozycjonowanie tła
      }}
    >
      <h1 style={{ color: "#fff", zIndex: 1 }}>
        Witaj na naszej stronie szachowej!
      </h1>
    </Box>
  );
}

export default HeadBackground;
