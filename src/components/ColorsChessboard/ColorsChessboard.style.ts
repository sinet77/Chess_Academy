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
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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

export const SubmitButton: SxProps = {
  fontFamily: "Roboto, sans-serif",
  textTransform: "none",
  cursor: "pointer",
  fontWeight: "bold",
  backgroundColor: "orange",
  color: "0d0d0d",
  padding: "12px",
  borderRadius: "8px",
  border:"1px solid #0D0D0D",
  boxShadow: "0 1px 10px rgb(0 0 0 / 0.2)",
  transition:"ease-in-out all 0.3s",
  "&:hover": {
    backgroundColor: "#F3F43F",
  },
};

