import { SxProps } from "@mui/material";
import img from "../../assets/man_background.jpeg";

export const Main: SxProps = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  gap: {md:"100px", lg:"200px"},
  backgroundImage: {sm:`url("${img}")`},
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor:{xs:"#F5E3D0",sm:"none"}
};
