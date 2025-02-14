import { keyframes, SxProps } from "@mui/material";
import fairPlayImage from "../../../assets/fair_play_image.jpg";

export const Starter: SxProps = {
  height: "500px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundImage: `url("${fairPlayImage}")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  alignItems: "center",
  color: "White",
  width: "100%",
};

export const Background: SxProps = {
  backgroundColor: "#0d0d0d",
  minHeight: "100vh",
  width: "100%",
};

export const HeadTitle: SxProps = {
  mt: "50px",
  fontWeight: "bold",
  fontSize: "50px",
  color: "white",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: "orange",
    textShadow: "4px 4px 8px grey",
  },
};
export const Description: SxProps = {
  padding: "50px",
  fontSize: "20px",
  maxWidth: "800px",
  color: "white",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: "orange",
    textShadow: "4px 4px 8px grey",
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
  height: "auto",
  padding: {xs:"15px",md:"200px"},
  marginTop: {xs:"150px", md:0},
  backgroundColor: "#0d0d0d",
  color: "white",
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
  color: "#0d0d0d",
  border: "1px solid #0d0d0d",
  fontSize: "50px",
  width: "100px",
  height: "50px",
  borderRadius: "10px",
  backgroundColor: "#FDA172",
  mt: "30px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
      backgroundColor: "orange", 
    },
};

export const Button: SxProps = {
  paddingBottom: "100px",
    "&:hover": {
      backgroundColor: "transparent", 
    },
    "&:focus": {
      backgroundColor: "transparent", 
    },
    "&:active": {
      backgroundColor: "transparent", 
    },
}

export const BackButton: SxProps = {
  color: "#0d0d0d",
  padding: "10px 20px",
  border: "1px solid 0d0d0d",
  textTransform: "none",
  fontSize: "20px",
  borderRadius: "10px",
  backgroundColor: "#FDA172",
  mt: "50px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
      backgroundColor: "orange", 
    },
};

export const Wrapper: SxProps = {
  padding: "20px",
}

export const guidelineTitle: SxProps = {
  mb: "50px",
};

export const ImportantBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  maxWidth: "500px",
  marginTop: "50px",
};

export const Important: SxProps = {
  fontWeight: "bold",
  textDecoration: "underline",
};
