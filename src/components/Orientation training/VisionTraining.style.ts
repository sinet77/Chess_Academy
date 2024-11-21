import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const Navbar: SxProps = {
  backgroundColor: "black",
  height: "112px",
  width: "100%",
};

export const Main: SxProps = {
  backgroundColor: "#312e2b",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "top",
  alignItems: "top",
};

export const Chessboard: SxProps = {
  width: {
    xs: "80%",
    sm: "70%",
    md: "80%",
    lg: "60%",
  },
  maxWidth: "800px",
  height: "auto",
  border: "1px solid black",
  cursor: "pointer",
};

export const TimerAndPoints: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  gap: "15px",
};

export const Points: SxProps = {
  color: "white",
  fontSize: "25px",
  fontWeight: "bold",
  letterSpacing: 2,
  fontFamily: "Roboto",
};

export const DrawnSquare: SxProps = {
  color: "white",
  position: "absolute",
  right: "40px",
  top: "40px",
  fontSize: "2.2rem",
  fontWeight: "bold",
  letterSpacing: 2,
  padding: "14px 20px",
  backgroundColor: "black",
  border: "1px solid #c65102",
  borderRadius: "5px",
};

export const BoardAndButtons: SxProps = {
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
  position: "relative",
  padding: "30px",
  gap: "40px",
};

export const Button = (theme: Theme) => ({
  color: "white",
  backgroundColor: "#000000",
  fontFamily: "Playfair Display",
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "23px",
  textTransform: "none",
  width: "100%",
  padding: "10px 30px",
  mr: "10px",
  "&:hover": {
    backgroundColor: "#c65102",
  },
   
  [theme.breakpoints.down("sm")]: {
    padding: "5px",
    fontSize: "10px" 
  },
});


export const InheritColor: SxProps = { color: "inherit" };

export const ButtonsContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

export const VisibilityContainer: SxProps = {
  fontSize: "30px",
  display: "flex",
  width: "100%",
  gap: "5px",
  textWrap: "nowrap",
  "& .MuiFormControlLabel-label": {
    fontFamily: "Playfair Display",
    color: "white",
    fontSize: "1rem",
  },
  "&.Mui-disabled .MuiFormControlLabel-label": {
    color: "grey",
  },
  "& .MuiCheckbox-root svg": {
    color: "orange",
  },
  "&.Mui-disabled .MuiCheckbox-root svg": {
    color: "lightgrey",
  },
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

export const List: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
};

export const AttemptsContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#FFFFFF1A",
  padding: 1,
  borderRadius: "10px",
  wdith: "100%",
};

export const ListItem: SxProps = {
  display: "flex",
  justifyContent: "left",
  padding: 0,
  width: "50px",
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
