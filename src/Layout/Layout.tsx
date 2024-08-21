import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import * as style from "./Layout.style";
import { Box } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Layout() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={style.Main}>
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </DndProvider>
  );
}
