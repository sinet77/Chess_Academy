import { SxProps } from "@mui/material";

export const Container: SxProps = {
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  height: "100vh",
};

export const CoursesTile: SxProps = {
  backgroundColor: "#0D0D0D",
  fontFamily: "Playfair Display",
  fontSize: "81.6px",
  fontWeight: "700",
  lineHeight: "108.77px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "white",
};

export const WhiteTile: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "center",
  alignItems: "center",
  gap: "21px",
  padding: "40px",
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
