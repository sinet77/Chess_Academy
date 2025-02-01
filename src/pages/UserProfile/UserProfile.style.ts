import { SxProps } from "@mui/material";

export const Main: SxProps = {
  backgroundColor: "grey",
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  justifyContent: "top",
  marginLeft: "-32px",
};

export const Item: SxProps = {
  padding: "1rem",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  backgroundColor: "white",
  borderRadius: "6px",
  boxSizing: "border-box",
};

export const TestAvatar: SxProps = {
  borderRadius: "50%",
  width: "200px",
  height: "200px",
  border: "1px solid #0d0d0d",
};

export const Label: SxProps = { display: "flex", alignItems: "center", mb: 1 };

export const DataBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "left",
}

export const Wrapper: SxProps = {
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}

export const Chessboard: SxProps = {
  width: { xs: "200px", md: "300px" },
  height: "auto",
  border: "1px solid black",
};
