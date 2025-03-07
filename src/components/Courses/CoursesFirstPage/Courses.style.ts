import { SxProps } from "@mui/material";

export const CoursesTile: SxProps = {
  backgroundColor: "#0D0D0D",
  fontFamily: "Playfair Display",
  fontSize: {xs:"50px", sm:"81px"},
  fontWeight: "700",
  lineHeight: "108.77px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "white",
  height:{xs:"400px", sm:"635px"},
};

export const WhiteTile: SxProps = {
  display: "grid",
  backgroundColor: "white",
  gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(3, 1fr)"},
  justifyContent: "center",
  alignItems: "center",
  gap: "21px",
  padding: "60px 20px",
};

export const Image: SxProps = {
  height: "120px",
  width: "120px",
};

export const OneTile: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "10px",
};

export const Header: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "23px",
  fontWeight: "600",
  lineHeight: "34px",
  color:"#0D0D0D"
};

export const Description: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  color: "#7E7E7E",
};
