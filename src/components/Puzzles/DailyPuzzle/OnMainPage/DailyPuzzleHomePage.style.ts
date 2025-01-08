import { SxProps } from "@mui/material";

export const Chessboard: SxProps = {
  width: "25%",
  height: "auto",
  border: "2px solid white",
  transition: "all 0.25s ease-in-out",
  "&:hover": {
    border: "2px solid green",
    transform: "scale(1.05)",
  },
};
export const TextAndIcon: SxProps = {
  padding: "10px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "green",
  color: "white",
  position: "relative",
  display: "flex",
  borderBottom: "2px solid white",
};

export const Icon: SxProps = {
  color: "white",
  position: "absolute",
  right: "10px",
};

export const PuzzleImage: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "flex",
};
