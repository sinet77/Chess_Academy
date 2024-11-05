import { SxProps, Theme } from "@mui/material";

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

export const OptionsTile: SxProps = {
  height: "350px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "black",
  alignItems: "center",
  color: "White",
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
  width: { xs: "300px", sm: "400px", md: "500px" },
  height: "auto",
  border: "1px solid black",
};

export const Button: SxProps<Theme> = {
  mb: 2,
  color: "#000",
  borderColor: "#000",
  "&:hover": {
    bgcolor: "#f5f5f5",
  },
};
