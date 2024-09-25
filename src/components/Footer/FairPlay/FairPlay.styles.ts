import { keyframes, SxProps } from "@mui/material";

export const Background: SxProps = {
  backgroundImage: "url(/src/assets/fair_play_background1.png)",
  backgroundColor: "#FEEBC7",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100%",
};

export const FairPlayImage: SxProps = {
  maxWidth: "100%",
  height: "300px",
  objectFit: "contain",
  mt: "30px",
};

export const HeadTitle: SxProps = {
  mt: "50px",
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

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const BouncingIcon: SxProps = {
  animation: `${bounce} 1.5s infinite`,
  color: "black",
  border: "1px solid black",
  fontSize: "50px",
  width: "100px",
  height: "50px",
  borderRadius: "10px",
  backgroundColor: "#FDA172",
  mt: "30px",
};

export const guidelineTitle: SxProps = {
  mb: "50px",
};

export const ImportantBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};

export const Important: SxProps = {
  fontWeight: "bold",
  textDecoration: "underline",
};
