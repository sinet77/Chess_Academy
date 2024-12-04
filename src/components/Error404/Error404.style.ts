import { SxProps } from "@mui/material";
import chessPieces from "/src/assets/chess_pieces.png";

export const Background: SxProps = {
  width: "100%",
  height: "100vh", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${chessPieces})`, 
  backgroundPosition: "center", 
  backgroundSize: "cover", 
  backgroundRepeat: "no-repeat", 
};

export const MainContent: SxProps = {
  padding: "24px",
  backgroundColor: "rgba(255, 255, 255, 0.8)", 
  borderRadius: "8px",
  width: "100%",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
};

export const Title: SxProps = { mb: 2, textAlign: "center" }

export const Gif: SxProps = { width: "100%", maxWidth: "300px", height: "auto", display: "block", ml: "auto", mr: "auto" }

