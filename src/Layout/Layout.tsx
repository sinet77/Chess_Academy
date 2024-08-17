import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import * as style from "./Layout.style";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <Box sx={style.Main}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}
