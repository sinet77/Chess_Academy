import { SxProps } from "@mui/material";

export const TextField: SxProps = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    "& > fieldset": { borderColor: "#964B00" },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": { borderColor: "#964B00" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#964B00" },
};

export const Checkbox: SxProps = {
  "&.Mui-checked": {
    color: "#964B00",
  },
};

export const Button: SxProps = {
  width: "50%",
  backgroundColor: "#964B00",
  color: "white",
  "&:hover": {
    backgroundColor: "#F1D3B2",
    color: "black",
    transform: "scale(1.1)",
  },
};
