import { SxProps } from "@mui/material";

export const Background: SxProps = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: 'url("/src/assets/chess_pieces.png") center / 100% no-repeat',
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
