import { SxProps } from "@mui/material";

export const rankCardContainer: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid black",
  borderRadius: "15px",
  padding: "20px",
  paddingTop: "10px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
  backgroundColor: "white"
};
export const iconWithTitle: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  padding: "10px",
  backgroundColor: "#282424",
  mb: "15px"
}
export const rankTitle: SxProps = {
  color: "orange"
}
export const rankContent: SxProps = {
  padding: "7px",
};

export const divider: SxProps = {
  backgroundColor: "#282424",
  width: "100%",
  opacity: 0.5
};
