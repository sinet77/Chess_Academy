import { SxProps } from "@mui/material";

export const Typography: SxProps = {
  fontFamily: "Roboto",
  fontSize: "17.6px",
  fontWeight: "500",
  lineHeight: "23.46px",
  textAlign: "left",
  color: "#FFFFFF",
  textTransform: "none",
};

export const Navbar: SxProps = {
  height: "112px",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  
};

export const BarContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0px",
  height: "65px",
  marginLeft: "50px",
};
export const WebTitle: SxProps = {
  textAlign: "center",
  textDecoration: "none",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
export const AppBar: SxProps = {
  background: "transparent",
  position: "absolute",
  width: "100%",
  boxShadow: "none"
};
export const WebLogo: SxProps = { height: "50px" };

export const TabsNavbar: SxProps = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "flex-end",
  gap: "20px",
  marginRight: "20px",
};
