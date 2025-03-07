import { SxProps } from "@mui/material";

export const badgesContainer: SxProps = {
  display: "flex",
  flexDirection: "column", 
  backgroundColor: "#302e2b",
  padding: {xs:"20px",sm:"40px"},
};

export const categoryTitle: SxProps = {
  color: "white",
  marginBottom: "30px",
  marginTop: "30px",
};

export const badgesWrapper: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  gap: 2,
  justifyContent: "start", 
  alignItems: "flex-start", 
};
