import { SxProps } from "@mui/material";

export const FairPlayImage: SxProps = {
  maxWidth: "100%",
  height: "300px",
  objectFit: "contain",
};

export const HeadTitle: SxProps = {
  fontWeight: "bold",
  fontSize: "50px",
  color: "#333",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#1e88e5",
    textShadow: "4px 4px 8px rgba(30, 136, 229, 0.7)",
  },
};

export const HeadContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mt: "20px",
};

export const MainContent: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#e0f7fa",
};
