import { SxProps } from "@mui/system";

export const Container: SxProps = {
  display: "flex",

  justifyContent: "top",
  alignItems: "center",
  flexDirection: "column",
  padding: 2,
  backgroundColor: "#eeeeee",
};

export const Description: SxProps = {
  textTransform: "none",
  color: "white",
  fontFamily: "Roboto",
};

export const PositionBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  textAlign: "center",
  padding: 1.5,
  border: "2px solid orange",
  backgroundColor: "#0d0d0d",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#FFA53F",
    border: "2px solid #0d0d0d",
    color: "#0d0d0d",
    "& .MuiTypography-root": {
      color: "#002366",
      fontWeight: "500",
    },
    "& .MuiTypography-subtitle1": {
      color: "#0d0d0d",
    },
  },
};

export const Image = {
  width: "100%",
  height: "auto",
  marginBottom: "0.5rem",
  borderRadius: "10px",
};
