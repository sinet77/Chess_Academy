import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SideMenu from "../LeftSideNavbar/LeftSideNavbar";
import { useState } from "react";
import * as style from "./Navbar.style";
import { web_logo } from "../../assets/FooterNavbarImages.ts";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { routes } from "../../routes.js";
import { useAuth } from "../../context/authContext/index.js";
import { Link } from "@mui/material";

const pages = [
  { name: "Home", path: routes.home },
  { name: "About (To Do)", path: routes.home },
  { name: "Courses", path: routes.courses },
  { name: "Our Couch", path: routes.ourcouch },
  { name: "Contact", path: routes.contactUs },
  { name: "Ranks and Badges", path: routes.ranksAndBadges },
];
const settings = [
  "Profile (To Do)",
  "Account (To Do)",
  "Dashboard (To Do)",
  "Logout",
];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation();

  const { handleSignOut } = useAuth();

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
        pathname !== "/ourcoach" && pathname !== "/private-lesson" && !pathname.startsWith("/play/computer/") &&(
          <Box
            sx={{ height: 112, backgroundColor: "#020202", width: "100%" }}
          ></Box>
        )}

      <AppBar sx={style.AppBar}>
        <Toolbar sx={style.Navbar}>
          <SideMenu />
          <Link to={routes.home} component={RouterLink} underline="none">
            <Box sx={style.BarContainer}>
              <Typography variant="h6" noWrap sx={style.WebTitle}>
                Chess Academy
                <Box component="img" sx={style.WebLogo} src={web_logo} />
              </Typography>
            </Box>
          </Link>

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

          <Box>
            <Tooltip title="Open settings">
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
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();
                    if (setting === "Logout") {
                      handleSignOut();
                    }
                  }}
                >
                  <Button>{setting}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
