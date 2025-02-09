import { SxProps } from "@mui/material";

export const Main: SxProps = {
  backgroundColor: "#0D0D0D",
  padding: { xs:"50px", md: "100px" },
  margin: "auto",
  maxWidth: "1800px",
};

export const Titles: SxProps = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "20px",
  mb: "50px",
};

export const SmallTitle: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "25px",
  fontStyle: "italic",
  fontWeight: "500",
  lineHeight: "34px",
  letterSpacing: "0.1em",
  color: "#B6740C",
  textAlign: "center",
};

export const BigTitle: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "52px",
  fontWeight: "600",
  lineHeight: "70px",
  color: "white",
  textAlign: "center",
};

export const DescriptionHeader: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  color: "#DADADA",
};

export const Image: SxProps = {
  height: "120px",
  width: "120px",
  filter: "sepia(100%) saturate(0%) brightness(200%)",
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
  color: "white",
  letterSpacing: "0.05em",
};

export const Description: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  color: "#DADADA",
};

export const Tiles: SxProps = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
  gridTemplateRows: "repeat(2,1fr)",
  columnGap: "30px",
  rowGap: "30px",
};
