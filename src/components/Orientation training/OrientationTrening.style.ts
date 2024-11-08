import { SxProps } from "@mui/material";

export const Navbar: SxProps = {
  backgroundColor: "black",
  height: "112px",
  width: "100%",
};

export const Chessboard: SxProps = {
  width: {
    xs: "80%",
    sm: "70%",
    md: "80%",
    lg: "60%",
  },
  height: "auto",
  border: "1px solid black",
  cursor: "pointer",
};

export const DrawnSquare: SxProps = {
  color: "white",
  display: "flex",
  justifyContent: "top",
  alignItems: "top",
  textAlign: "top",
  mb: "50px",
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

export const TitleContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  flexGrow: 1,
  gap: "30px",
};

export const ImageTarget: SxProps = {
  width: { xs: "30%", sm: "40%", md: "80%", lg: "70%" },
  height: "auto",
  borderRadius: "5px",
};

export const List: SxProps = { display: "flex", flexWrap: "wrap", gap: "10px" };

export const AttemptsContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#FFFFFF1A",
  padding: 1,
  borderRadius: "10px",
};

export const ListItem: SxProps = {
  padding: 0,
  width: "auto",
  minWidth: "fit-content",
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
