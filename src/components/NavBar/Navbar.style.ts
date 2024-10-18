import { SxProps } from "@mui/material";

export const Typography: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "17.6px",
  fontWeight: "500",
  lineHeight: "23.46px",
  textAlign: "left",
  color: "#FFFFFF",
  textTransform: "none",
};

export const Navbar: SxProps = {
  borderBottom: "1px solid #DADADA",

  height: "112px",
  gap: "0px",
  border: "1px 0px 0px 0px",
  opacity: "0px",
  backgroundColor: "#000000",
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
  marginLeft: "255px",
};
export const WebTitle: SxProps = { textAlign: "center" };
export const AppBar: SxProps = { backgroundColor: "#000000", width: "100%" };
export const WebLogo: SxProps = { height: "50px" };
export const IconButton: SxProps = { mr: -5 };

export const TabsNavbar: SxProps = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};
