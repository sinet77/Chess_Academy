import { SxProps } from "@mui/material";

export const Main: SxProps = {
  backgroundColor: "#03707d",
  boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
  padding: "50px",
  textAlign: "center",
  height: "100vh",
};

export const Form: SxProps = {
  borderRadius: "10px",
  display: "flex",
  backgroundColor: "#D8DFE5",
  border: "2px solid #03707d",
  flexDirection: "column",
  gap: 2,
  padding: "50px",
  width: "50%",
  margin: "0 auto",
};

export const FormAndTitle: SxProps = {
  boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
  backgroundImage: "url(/src/assets/pen.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "auto",
  padding: "50px",
};

export const Text: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: "20px",
};

export const Paragraph: SxProps = {
  fontSize: "17px",
  fontWeight: "bold",
};

export const Button: SxProps = {
  width: "40%",
  backgroundColor: "#46656F",
  border: "2px solid black",
  color: "white",
  "&:hover": {
    backgroundColor: "#a7e7e1",
    color: "black",
    transform: "scale(1.1)",
  },
};

export const TextField: SxProps = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FBFBFB",
    "& > fieldset": { borderColor: "black" },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": { borderColor: "black" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "black" },
};
