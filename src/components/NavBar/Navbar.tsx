import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import * as style from "./Navbar.style";
import { web_logo } from "../../assets/FooterNavbarImages.ts";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { routes } from "../../routes.js";
import { useAuth } from "../../context/authContext/index.js";
import { Divider, Link, useMediaQuery } from "@mui/material";

const pages = [
  { name: "Home", path: routes.home },
  { name: "About us", path: routes.aboutUs },
  { name: "Courses", path: routes.courses },
  { name: "Our Couch", path: routes.ourcouch },
  { name: "Contact", path: routes.contactUs },
  { name: "Ranks and Badges", path: routes.ranksAndBadges },
];
const settings = [
  { name: "Profile", path: routes.userProfile },
  { name: "Logout", path: null },
];

const gameModes = [  
  { name: "Training", path: routes.training },
  { name: "Play vs computer", path: routes.chooseComputerLevel },
  { name: "Daily puzzle", path: routes.dailyPuzzle },
  { name: "Puzzles", path: routes.chooseDifficulty },
  { name: "Pawns game", path: routes.chooseStartingPosition },
  { name: "Vision", path: routes.vision }]

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const { handleSignOut } = useAuth();

  const isMobile = useMediaQuery("(max-width:1000px)");

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {pathname !== "/" &&
        pathname !== "/play/choose-computer-level" &&
        pathname !== "/courses" &&
        pathname !== "/ourcoach" &&
        pathname !== "/private-lesson" &&
        !pathname.startsWith("/play/computer/") &&
        !pathname.startsWith("/fair-play") && (
          <Box
            sx={{ height: 112, backgroundColor: "#020202", width: "100%" }}
          ></Box>
        )}
      <AppBar sx={style.AppBar}>
        <Toolbar sx={style.Navbar}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link to={routes.home} component={RouterLink} underline="none">
            <Box sx={style.BarContainer}>
              <Typography variant="h6" noWrap sx={style.WebTitle}>
                Chess Academy
                <Box component="img" sx={style.WebLogo} src={web_logo} />
              </Typography>
            </Box>
          </Link>
          </Box>

          {!isMobile && (
            <Box sx={style.TabsNavbar}>
              {pages.map((page) => (
                <Link
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  sx={style.Typography}
                  underline="none"
                >
                  {page.name}
                </Link>
              ))}
            </Box>
          )}

        <Box>
          <Tooltip title="Open settings" sx={{padding:0}}>
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Profile" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.name}
                onClick={() => {
                  handleCloseUserMenu();
                  if (setting.name === "Logout") {
                    handleSignOut();
                  }
                }}
              >
                {setting.path ? (
                  <Link
                    component={RouterLink}
                    to={setting.path}
                    sx={{ textDecoration: "none" }}
                  >
                    {setting.name}
                  </Link>
                ) : (
                  <Typography>{setting.name}</Typography>
                )}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
    <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
  <Box sx={{ position: "relative", width: 250, height: "100%", backgroundColor:"#0d0d0d" }}>
    <IconButton
      color="inherit"
      edge="start"
      onClick={() => setMobileOpen(false)}
      sx={{
        position: "absolute",
        top: 36,
        left: 16,
        color:"white"
      }}
    >
      <MenuIcon />
    </IconButton>
    <List sx={{ mt: 9 }}>
      {pages.map((page) => (
        <ListItem
          key={page.name}
          onClick={() => setMobileOpen(false)}
          component={RouterLink}
          to={page.path}
          sx={{color:"white"}}
        >
          <ListItemText primary={page.name} />
        </ListItem>
      ))}
      <Divider sx={{border:"1px solid white",mx:2}}/>
      {gameModes.map((mode) => (
        <ListItem
          key={mode.name}
          onClick={() => setMobileOpen(false)}
          component={RouterLink}
          to={mode.path}
          sx={{color:"white"}}
        >
          <ListItemText primary={mode.name} />
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>

    </>
  );
}


export default Navbar;
