import { SxProps } from "@mui/material";

export const Window: SxProps = {
  border: "2px solid orange",
  padding: "10px",
  display: "flex",
  flexDirection: {xs:"column", md:"row"},
  color: "black",
  backgroundColor: "#e0e0e0",
  mt: "20px",
};
export const BackButton: SxProps = {
  position: "absolute",
  left: "30px",
  top: "150px",
  color: "white",
  backgroundColor: "#000000",
  fontFamily: "Playfair Display",
  border: "1px solid white",
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

export const OptionsButton: SxProps = {
  position: "absolute",
  left: "10px",
  top: "220px",
  display: "flex",
  alignContent: "center",
  gap: "10px",
  textTransform: "none",
  fontFamily: "Playfair Display",
  color: "white",
  fontSize: "22px",
  fontWeight: "bold",
  height: "50px",
  padding: "20px",
  "&:hover": {
    bgcolor: "transparent",
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
