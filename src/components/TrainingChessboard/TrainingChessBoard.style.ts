import { SxProps, Theme } from "@mui/material";

export const Table: SxProps = {
  width: "80%",
  border: "1px solid black",
};

export const TrainingPageLayout: SxProps = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",
  backgroundColor: "#e9f5f8",
};

export const firstColumn: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
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
};

export const WhiteAndBlackColumn: SxProps = {
  textAlign: "center",
  borderRight: "1px solid black",
  width: "40%",
};

export const MainRow: SxProps = {
  backgroundColor: "#DCDCDC",
  borderBottom: "2px solid black",
};

export const Chessboard: SxProps = {
  width: "70%",
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
};

export const ButtonPgn: SxProps = {
  "&:hover": {
    backgroundColor: "#53adcb",
  },
};

export const PgnInput: SxProps = {
  padding: "20px",
  "& .MuiInputBase-input": {
    fontSize: "15px",
    padding: "10px",
    height: "auto",
  },
};
