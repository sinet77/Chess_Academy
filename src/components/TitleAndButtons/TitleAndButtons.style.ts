import { SxProps } from "@mui/material";

export const TileContainer: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(3, auto)",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  marginBottom: "20px",
};

export const Title: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

export const ImageButtonContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "160px",
  height: "185px",
  backgroundColor: "#292929",
  borderRadius: "8px",
  border: "1px solid white",
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
  paddingBottom: "25px",
  fontWeight: "bold",
  fontSize: "15px",
};
