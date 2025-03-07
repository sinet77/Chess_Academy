import { SxProps } from "@mui/material";

export const rankCardContainer: SxProps = {
  width: "100%",
  maxWidth: "500px",
  minWidth: "170px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  padding: "40px",
  paddingTop: "10px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
  backgroundColor: "white",
  aspectRatio: "2/1",
  
};
export const iconWithTitle: SxProps = {
  width: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  padding: "40px",
  backgroundColor: "#282424",
  mb: "15px",
  aspectRatio: "1/1",
}

export const iconImg = {
  filter: 'invert(56%) sepia(94%) saturate(1453%) hue-rotate(-9deg) brightness(102%) contrast(105%)',
  width: '100px',
  height: '100px',
  marginBottom: '10px'
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
