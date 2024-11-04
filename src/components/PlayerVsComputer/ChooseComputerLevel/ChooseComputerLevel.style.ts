import { SxProps } from "@mui/material";

export const HeadImage: SxProps = {
  height: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  alignItems: "center",
};

export const Title: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "50px",
  fontWeight: "700",
  lineHeight: "100px",
  color: "white",
};

export const ButtonImage: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "1px solid white",
};

export const ButtonForChoice: SxProps = {
  width: "80px",
  height: "80px",
  padding: 0,
};

export const Container: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 2,
  backgroundColor: "#eeeeee",
};

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
  padding: 1.5,
  border: "2px solid orange",
  backgroundColor: "black",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#FFA53F",
    border: "2px solid black",
    color: "black",
    "& .MuiTypography-root": {
      color: "#002366",
      fontWeight: "500",
    },
    "& .MuiTypography-subtitle1": {
      color: "black",
    },
  },
};

export const Image = {
  width: "100%",
  height: "auto",
  marginBottom: "0.5rem",
};
