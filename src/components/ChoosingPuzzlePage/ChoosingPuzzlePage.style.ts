import { SxProps } from "@mui/material";

export const Main: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
};

export const HeadTitle: SxProps = {
  mb: "25px",
  fontWeight: "bold",
  fontSize: "2rem",
  textTransform: "none",
  fontFamily: "Playful Display",
  background: "linear-gradient(180deg, black, #fa6602)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const Button: SxProps = {
  width: "100vw",
  backgroundSize: "100% 600%",
  height: "128px",
  color: "white",
  textShadow: `
    -2px -2px 0 black,  
     2px -2px 0 black,  
    -2px  2px 0 black,  
     2px  2px 0 black   
  `,
  fontWeight: "bold",
  fontSize: "2rem",
  textTransform: "none",
  fontFamily: "Playful Display",
  boxShadow: 1,
  overflow: "hidden",
  "&:hover": {
    opacity: 0.5,
  },
};