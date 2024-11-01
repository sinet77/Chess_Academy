import { SxProps } from "@mui/material";

export const HeadTitleContainer: SxProps = {
  backgroundColor: "#000000",
  fontFamily: "Playfair Display",
  fontSize: "70px",
  fontWeight: "700",
  lineHeight: "108px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "white",
};

export const Description: SxProps = {
  textTransform: "none",
  color: "white",
  fontFamily: "Roboto",
};

export const LevelTitle: SxProps = {
  color: "#ffa500",
  padding: "10px",
};

export const CharacterBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  textAlign: "center",
  padding: 2,
  border: "2px solid orange",
  backgroundColor: "black",
  borderRadius: "25px",
  "&:hover": {
    backgroundColor: "#FFA53F",
    border: "2px solid black",
    color: "black",
    "& .MuiTypography-root": {
      color: "#002366",
      fontWeight: "bold",
    },
    "& .MuiTypography-subtitle1": {
      color: "black",
    },
  },
};
