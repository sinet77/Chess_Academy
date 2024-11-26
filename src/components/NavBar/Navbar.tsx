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
import { Link } from "react-router-dom";
import { routes } from "../../routes.js";
import { useAuth } from "../../context/authContext/index.js";

const pages = [
  { name: "Home", path: routes.home },
  { name: "About", path: routes.aboutUs },
  { name: "Courses", path: routes.courses },
  { name: "Our Couch", path: routes.ourcouch },
  { name: "Contact", path: routes.contactUs },
  { name: "Ranks and Badges", path: routes.ranksAndBadges },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { handleSignOut } = useAuth();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={style.AppBar}>
      <Toolbar sx={style.Navbar}>
        <SideMenu />
        <Box sx={style.BarContainer}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={routes.home}
            sx={style.WebTitle}
          >
            Chess Academy
            <Box component="img" sx={style.WebLogo} src={web_logo} />
          </Typography>
        </Box>

        <Box sx={style.TabsNavbar}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={style.Typography}
            >
              {page.name}
            </Button>
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
  );
}

export default Navbar;
