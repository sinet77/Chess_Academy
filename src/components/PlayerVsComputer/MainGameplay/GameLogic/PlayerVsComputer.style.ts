import { SxProps } from "@mui/material";
import img from "../../../../assets/play_computer_background.jpg";

export const TrainingPageLayout: SxProps = {
  display: "flex",
  flexDirection: "column",
  minHeight  : "100vh",
  width: "100%",
  backgroundColor: "#e9f5f8",
};

export const OptionsTile: SxProps = {
  height:{xs:"200px", md:"400px"},
  minHeight: {xs:"200px", md:"320px"},
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundImage: `url("${img}")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  alignItems: "center",
  color: "White",
};

export const firstColumn: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export const secondColumn: SxProps = {
  display: "flex",
  justifyContent: "top",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "20px",
  marginTop:{xs:"30px", lg:"0px"},
};

export const Chessboard: SxProps = {
  width: { xs: "350px", sm: "500px", md: "650px" },
  height: "auto",
  border: "1px solid black",
};
