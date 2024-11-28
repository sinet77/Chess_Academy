import { SxProps } from "@mui/material";

export const TileContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "70px",
  padding: "10px",
  mb: "20px",
};

export const Title: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

export const TitleText: SxProps = {
  color: "#fff",
  fontFamily: "Playfair Display",
  fontSize: "50px",
  fontWeight: "700",
  lineHeight: "110px",
};

export const ImageButtonContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "160px",
  height: "200px",
  backgroundColor: "#292929",
  borderRadius: "8px",
  border: "1px solid white",
  mb: "20px",
  transition: "transform 0.2s",
  "&:hover": {
    backgroundColor: "#5C5C5C",
    transform: "scale(1.05)",
    textDecoration: "none",
  },
};

export const ButtonImage: React.CSSProperties = {
  width: "160px",
  height: "200px",
  marginBottom: "8px",
  borderRadius: "8px",
};
export const TitleUnderButtonImage: React.CSSProperties = {
  textTransform: "none",
  color: "white",
  paddingBottom: "10px",
  fontWeight: "bold",
  fontSize: "15px",
};
