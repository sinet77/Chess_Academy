import { SxProps, Theme } from "@mui/material";

export const Navbar: SxProps = {
  backgroundColor: "black",
  height: "112px",
  width: "100%",
};

export const Table: SxProps = {
  width: "80%",
  border: "1px solid black",
  maxHeight: "500px",
  overflowY: "auto",
};

export const TrainingPageLayout: SxProps = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100%",
  backgroundColor: "#e9f5f8",
};

export const Items: SxProps = {
  display: "flex",
  gap: "40px",
  alignItems: "center",
};

export const firstColumn: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
};

export const secondColumn: SxProps = {
  display: "flex",
  justifyContent: "top",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "20px",
};

export const moveColumn: SxProps = {
  textAlign: "center",
  borderRight: "1px solid black",
  width: "20%",
  height: "30px",
  padding: 0,
};

export const WhiteAndBlackColumn: SxProps = {
  textAlign: "center",
  borderRight: "1px solid black",
  width: "40%",
  height: "10px",
  padding: 0,
};

export const MainRow: SxProps = {
  backgroundColor: "#DCDCDC",
  position: "sticky",
  top: 0,
  zIndex: 1,
  borderBottom: "2px solid black",
};

export const Chessboard: SxProps = {
  width: { xs: "300px", sm: "400px", md: "600px" },
  height: "auto",
  border: "1px solid black",
};

export const modalStyle: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "600px",
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#bcdfeb",
};

export const Button: SxProps<Theme> = {
  mb: 2,
  color: "#000",
  borderColor: "#000",
  "&:hover": {
    bgcolor: "#f5f5f5",
  },
  transition: "all 0.3s ease-in-out",
  width: "100%",
};

export const UndoButton: SxProps<Theme> = {
  backgroundColor: "orange",
  color: "#0D0D0D",
  transition: "all 0.3s ease-in-out",
  width: "100%",
  "&:hover": {
    bgcolor: "#53adcb",
  },
};

export const Pgn: SxProps = {
  display: "flex",
  marginTop: "30px",
  justifyContent: "center",
  alignItems: "center",
};

export const Fen: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const ButtonFen: SxProps = {
  backgroundColor: "#53adcb",
  transition: "all 0.3s ease-in-out",
  width: "100%",
};

export const ButtonPgn: SxProps = {
  "&:hover": {
    backgroundColor: "#53adcb",
  },
  transition: "all 0.3s ease-in-out",
  width: "100%",
};

export const PgnInput: SxProps = {
  padding: "20px",
  "& .MuiInputBase-input": {
    fontSize: "15px",
    padding: "10px",
    height: "auto",
  },
  width: "100%",
};
