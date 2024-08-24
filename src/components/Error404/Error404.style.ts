import { SxProps } from "@mui/material";

export const Background: SxProps = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: 'url("/src/assets/chess_pieces.png")',
  backgroundSize: "100%", // Szerokość i wysokość tła
  backgroundRepeat: "no-repeat", // Opcjonalnie, aby zapobiec powtarzaniu się tła
  backgroundPosition: "center",
};

export const MainContent: SxProps = {
  backgroundColor: "#3b3b3b",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "10px",
  mb: "60px",
};
