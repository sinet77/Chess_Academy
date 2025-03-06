import { SxProps } from "@mui/material";

export const badgesContainer: SxProps = {
  display:"grid",
  gridTemplateColumns: "repeat(3,1fr)",
  backgroundColor: "#302e2b",
  padding: "30px",
  paddingTop: 0,
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
};
