import { SxProps } from "@mui/material";

export const Main: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1rem",
};

export const Label: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};
export const ColorInput: SxProps = {
  border: "1px solid #0D0D0D",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  cursor: "pointer",
  "&::-webkit-color-swatch": {
    border: "1px solid #0D0D0D",
    borderRadius: "50%",
  },
};
