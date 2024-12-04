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
  width: "100%",
  height: "auto",
  padding:0,
  overflow:"hidden",
  backgroundColor: "#292929",
  borderRadius: "8px",
  border: "1px solid white",
  transition: "transform 0.2s",
  "&:hover": {
    backgroundColor: "#5C5C5C",
    transform: "scale(1.05)",
  },
};

export const ButtonImage: React.CSSProperties = {
  width: "160px",
  height: "auto",
  maxHeight: "100%",
  borderRadius: "8px"

};
export const TitleUnderButtonImage: React.CSSProperties = {
  color: "white",
  fontWeight: "bold",
  fontSize: "15px",
  paddingBlock: "12px",
  textDecoration: "none",
};
