import { SxProps } from "@mui/system";

export const Main: SxProps = {
  backgroundColor: "#312e2b",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: { xs: "0px", md: "40px" },
};

export const Chessboard: SxProps = {
  width: { xs: "370px", sm: "550px", md: "800px" },
  height: "auto",
  border: "1px solid black",
  cursor: "pointer",
};

export const BoardAndButtons: SxProps = {
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
  gap: "40px",
};

export const Button: SxProps = {
  color: "white",
  backgroundColor: "#000000",
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "23px",
  textTransform: "none",
  width: "100%",
  mr: "10px",
  padding: "15px 30px",
  "&:hover": {
    backgroundColor: "#c65102",
  },
};

export const SwitchLabel: SxProps = {
  ml: "10px",
  gap: "10px",
  textWrap: "nowrap",
  "& .MuiFormControlLabel-label": {
    fontSize: "0.9rem",
    color: "white",
  },
};

export const ButtonsContainer: SxProps = {
  display: "grid",
  gap: "20px",
};

export const Instruction: SxProps = {
  backgroundColor: "#242424",
  color: "white",
  display: "flex",
  width: "100%",
  maxWidth: "2000px",
  padding: { xs: "12px", md: "20px" },
  border: "1px solid #DADADA",
  borderTop: "none",
};

export const Title: SxProps = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: "10px",
  mb: "30px",
  padding: "10px 20px 20px 20px",
  borderBottom: "1px solid #DADADA",
};

export const TitleName: SxProps = {
  fontSize: "1.5rem",
  fontWeight: "500",
  lineHeight: "23px",
};

export const DescriptionContainer: SxProps = {
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
};

export const Description: SxProps = {
  fontSize: { sx: "1rem", md: "1.5rem" },
  fontWeight: "500",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
};

export const ArrowBackIcon: SxProps = {
  color: "orange",
  mr: "10px",
  fontSize: "2rem",
  display: "flex",
};
