import { SxProps } from "@mui/material";

export const Links: SxProps = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};
export const FooterIcons: SxProps = {
  display: "flex",
  justifyContent: "right",
  gap: "20px",
};

export const Footer: SxProps = {
  maxWidth: "100%",
  marginTop: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "180px",
  backgroundColor: "#242424",
  color: "white",
  alignItems: "center",
  gap: "20px",
  padding: {xs: "15px",md:"10px 80px"},
};

export const Typography: SxProps = {
  textDecoration: "none",
  color: "inherit",
  fontFamily: "Playfair Display",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "23px",
};

export const Image: SxProps = {
  height: "70px",
  width: "70px",
};

export const ImgAndQuote: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
};

export const IconsAndCopyright: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  marginBottom: "-20px",
};

export const CopyrightText: SxProps = {
  textAlign: "right",
  fontFamily: "Roboto",
  fontSize: "13px",
  fontWeight: "300",
  lineHeight: "23px",
  color: "#DADADA",
};

export const Container: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: {xs:"column", md:"row"},
  gap:{xs:"10px", md:"0px"},
  width: "100%",
};

export const Divider: SxProps = {
  borderColor: "white",
  borderWidth: "1px solid #DADADA",
  width: "100%",
};
