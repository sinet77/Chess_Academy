import { SxProps } from "@mui/material";

export const Main: SxProps = {
  p: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const ImgContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100%",
};

export const Button: SxProps = {
  color: "white",
  mt: "30px",
  backgroundColor: "#000000",
  fontFamily: "Playfair Display",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "23px",
  textTransform: "none",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "#B6740C",
  },
};

export const ColorOnMove: SxProps = {
  display: "flex",
  fontFamily: "Roboto",
  fontSize: "25px",
  fontStyle: "italic",
  fontWeight: "500",
  lineHeight: "34px",
  padding: "5px",
};

export const ColorCircle = {
  width: "26px",
  height: "26px",
  borderRadius: "50%",
  ml: 1,
  border: "1px solid black",
};

export const CorrectText: SxProps = {
  p: "20px 10px 30px 10px",
  textAlign: "center",
  color: "green",
  fontSize: "1.5rem",
  fontWeight: "bold",
};

export const OptionSwitchLabel: SxProps = {
  ".MuiFormControlLabel-label": {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#7E7E7E",
    fontWeight: "400",
    ml: 1,
  },
};

export const Switch: SxProps = {
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#B6740C",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#B6740C",
  },
  "& .MuiSwitch-switchBase": {
    color: "#ccc",
  },
  "& .MuiSwitch-track": {
    backgroundColor: "black",
  },
};

export const NextButtonAndSwitch: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
};
