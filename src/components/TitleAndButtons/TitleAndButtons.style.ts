import { SxProps } from "@mui/material";

export const Wrapper: SxProps = {
  padding: { xs: "50px", md: "100px" },
  backgroundColor: "#0D0D0D",
};

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
  paddingBottom: { xs: "50px", md: "80px" },
};

export const TitleText: SxProps = {
  color: "#fff",
  fontFamily: "Roboto",
  fontSize: { xs: "30px", sm: "40px", md: "50px" },
  fontWeight: "700",
  textAlign: "center",
};

export const ImageButtonContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  padding: 0,
  overflow: "hidden",
  backgroundColor: "#292929",
  borderRadius: "8px",
  border: "1px solid white",
  transition: "all 0.25s ease-in-out",
  "&:hover": {
    backgroundColor: "#5C5C5C",
    transform: "scale(1.05)",
  },
};

export const ButtonImage: React.CSSProperties = {
  width: "160px",
  height: "auto",
  maxHeight: "100%",
  borderRadius: "8px",
};
export const TitleUnderButtonImage: React.CSSProperties = {
  color: "white",
  fontWeight: "bold",
  fontSize: "15px",
  paddingBlock: "12px",
  textDecoration: "none",
};
