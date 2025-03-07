import { SxProps } from "@mui/material";

export const Table: SxProps = {
  width: "80%",
  maxWidth:"800px",
  maxHeight: "540px",
  overflowY: "auto",
  borderRadius: "8px",
  backgroundColor: "#f8f9fa",
  boxShadow: "none",
  border: "1px solid #b0b0b0",
  borderRight: "none",
};

export const TableTitle: SxProps = {
  marginBottom: "20px",
  fontWeight: "bold",
};

export const firstColumn: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
};

export const secondColumn: SxProps = {
  display: "flex",
  justifyContent: "top",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "20px",
};

export const moveColumn: SxProps = {
  textAlign: "center",
  width: "21%",
  height: "40px",
  padding: 0,
  fontWeight: 600,
  color: "#444",
  borderRight: "1px solid #b0b0b0",
};

export const WhiteAndBlackColumn: SxProps = {
  textAlign: "center",
  width: "40%",
  height: "10px",
  padding: 0,
  fontWeight: 500,
  color: "#666",
  borderRight: "1px solid #b0b0b0",
};

export const MainRow: SxProps = {
  backgroundColor: "#e8e8e8",
  position: "sticky",
  top: 0,
  zIndex: 1,
  borderBottom: "2px solid #ddd",
  fontWeight: 700,
};
