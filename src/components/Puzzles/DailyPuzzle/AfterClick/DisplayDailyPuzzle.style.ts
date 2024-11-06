import { SxProps } from "@mui/material";

export const Navbar: SxProps = {
  backgroundColor: "black",
  height: "112px",
  width: "100%",
};

export const Chessboard: SxProps = {
  width: "60%",
  height: "auto",
  border: "1px solid black",
};

export const BoardAndButtons: SxProps = {
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

export const Button: SxProps = {
  color: "white",
  backgroundColor: "#000000",
  fontFamily: "Playfair Display",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "23px",
  textTransform: "none",
  width: "100%",
  mr: "10px",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "#B6740C",
  },
};

export const ButtonsContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  marginTop: 2,
};
export const Main: SxProps = {
  backgroundColor: "#312e2b",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "top",
  alignItems: "top",
};

export const Moves: SxProps = {
  backgroundColor: "#242424",
  color: "white",
  height: "auto",
  padding: "20px",
  width: "40%",
  border: "1px solid #DADADA",
  borderTop: "none",
  maxHeight: "100vh",
  overflowY: "auto",
  direction: "rtl",
};

export const Title: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  mb: "30px",
  padding: "10px 20px 20px 20px",
  borderBottom: "1px solid #DADADA",
};

export const TitleName: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "23px",
};

export const PuzzleIcon: SxProps = { color: "#B6740C" };

export const TitleContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  gap: "10px",
};

export const ListItem: SxProps = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#FFFFFF1A",
  padding: "15px",
  borderRadius: "10px",
  width: "100%",
  direction: "ltr",
};

export const ArrowBackIcon: SxProps = {
  color: "white",
  mr: "10px",
  fontSize: "30px",
  display: "flex",
};

export const CheckIcon: SxProps = {
  color: "#81B64C",
  marginRight: 1,
};

export const CancelIcon: SxProps = {
  color: "#FA412D",
  marginRight: 1,
};

export const ValidationWrongMoveName: SxProps = {
  color: "#FA412D",
  marginLeft: 1,
  fontWeight: "bold",
};

export const ValidationCorrectMoveName: SxProps = {
  color: "#81B64C",
  marginLeft: 1,
  fontWeight: "bold",
};
