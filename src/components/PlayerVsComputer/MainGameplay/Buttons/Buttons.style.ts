import { SxProps } from "@mui/material";

export const Container: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "30px",
};

export const Window: SxProps = {
  bgcolor: "#fff",
  border: "2px solid #000",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#bcdfeb",
  mb: "25px",
};
export const BackButton: SxProps = {
  color: "white",
  backgroundColor: "#000000",
  fontFamily: "Playfair Display",
  fontSize: "16px",
  fontWeight: "bold",
  height: "50px",
  textTransform: "none",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "orange",
    color: "black",
    fontWeight: "bold",
    border: "2px solid black",
  },
};

export const Button: SxProps = {
  color: "#000",
  textTransform: "none",
  borderColor: "#000",
  fontSize: "0.8rem",
  "&:hover": {
    bgcolor: "#f5f5f5",
  },
};

export const SwitchLabel: SxProps = {
  ml: "10px",
  "& .MuiFormControlLabel-label": {
    fontSize: "0.8rem",
  },
};
