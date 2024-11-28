import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Link
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { routes } from "../../routes";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", }}>
      {/* Przyciski nawigacyjne */}
      <IconButton
        edge="start"
        color="inherit"
        onClick={toggleDrawer}
        aria-label="menu"
        sx={{
          left: open ? `${drawerWidth}px` : "0px",
          transition: "left 0.3s",
        }}
      >
        <DoubleArrowIcon />
      </IconButton>

      {/* Persistent Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: "30px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", padding: "30px", color: "black"}}>
        <Link
            to={routes.training}
            component={RouterLink}
            underline="hover"
          >
            <ListItemText primary="Training" />
          </Link>
          <Link
            to={routes.vision}
            component={RouterLink}
            underline="hover"
          >
            <ListItemText primary="Vision practice" />
          </Link>
          <Link
            to={routes.privateLesson}
            component={RouterLink}
            underline="hover"
          >
            <ListItemText primary="Get private lesson" />
          </Link>
        </List>
      </Drawer>
      {/* Główna zawartość */}
      <Box
        component="main"
        sx={{
          paddingLeft: open ? `${drawerWidth}px` : "0px",
          transition: "padding-left 0.3s",
        }}
      ></Box>
    </Box>
  );
}
