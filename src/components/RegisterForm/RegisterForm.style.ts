import { SxProps } from "@mui/material";

export const Main: SxProps = {
  background: "linear-gradient(to left, #E1DADA, #BDCAD9)",
  boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
  padding: "30px",
  borderRadius: "3px",
  maxWidth: "90%",
  marginTop: "7%",
  textAlign: "center",
};
export const Form: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  width: "300px",
  margin: "0 auto",
};
export const Text: SxProps = {
  marginBottom: "20px",
  fontSize: "30px",
  fontFamily: "Edu VIC WA NT Beginner",
};

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

export const Centered: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

export const Divider: SxProps = {
  width: "100%",
};
