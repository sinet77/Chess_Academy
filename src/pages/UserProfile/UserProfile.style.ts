import { SxProps } from "@mui/material";

export const Main: SxProps = {
  backgroundColor: "grey",
  display: "flex",
  minHeight: {sm:"100vh"},
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  justifyContent: "center",
};

export const Item: SxProps = {
  padding: "50px",
  display: "flex",
  height: "100%",
  width: {xs:"300px",md:"500px"},
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  backgroundColor: "#F5E3D0",
  borderRadius: "8px",
  border: "1px solid #0d0d0d",
  boxShadow: "0 1px 10px rgb(0 0 0 / 0.2)",
};
export const Divider: SxProps = {
  width: "100%",
  border: "1px solid #0d0d0d",
};
export const DataBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "flex-start",
};

export const Wrapper: SxProps = {
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const Chessboard: SxProps = {
  width: { xs: "220px", md: "300px" },
  height: "auto",
  boxShadow: "0 1px 10px rgb(0 0 0 / 0.2)",
  borderRadius: "8px",
  padding: "5px",
  backgroundColor: "white",
};
