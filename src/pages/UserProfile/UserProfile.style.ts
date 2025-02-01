import { SxProps } from "@mui/material";

export const Main: SxProps = {
  backgroundColor: "grey",
  padding: "10px 40px",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const Item: SxProps = {
  padding: "10px",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  backgroundColor: "white",
  borderRadius: "6px",
};

export const TestAvatar: SxProps = {
  borderRadius: "50%",
  width: "200px",
  height: "200px",
  border: "1px solid #0d0d0d",
};

export const Label: SxProps = { display: "flex", alignItems: "center", mb: 1 };
