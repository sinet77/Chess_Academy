import { SxProps } from "@mui/material";

export const Chessboard: SxProps = {
  width: { xs: "60%", sm: "40%", md: "70%", lg: "70%", xl: "65%" },
  height: "auto",
  border: "2px solid white",
  transition: "all 0.25s ease-in-out",
  "&:hover": {
    border: "2px solid green",
    transform: "scale(1.05)",
  },
};

export const Title: SxProps = {
  fontSize: { xs: "15px", lg: "20px", xl: "22px" }
}

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
  fontSize: { xs: "15px", lg: "20px", xl: "22px" },
  color: "white",
  position: "absolute",
  right: "10px",
};

export const PuzzleImage: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "flex",
};
