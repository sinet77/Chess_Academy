import { SxProps } from "@mui/material";
import img from "../../assets/register_background.jpg";

export const Main: SxProps = {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url("${img}")`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};
