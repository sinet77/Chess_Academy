import { SxProps } from "@mui/material/styles";

export const Container: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  maxWidth: "800px",
  margin: "auto",
  textAlign: "justify",
  backgroundColor: "#cefad0",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
};

export const Background: SxProps = {
  backgroundImage: "url(/src/assets/shattered_figures.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "20px",
  height: "100vh",
};

export const Title: SxProps = {
  fontWeight: "bold",
  color: "black",
};

export const SubTitle: SxProps = {
  fontWeight: "bold",
  color: "black",
  marginTop: "15px",
};

export const Description: SxProps = {
  color: "black",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "15px",
};

export const Section: SxProps = {
  textAlign: "left",
  marginBottom: "18px",
  backgroundColor: "#9FE2BF",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid black",
};

export const ActionButton: SxProps = {
  backgroundColor: "#b87333",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#654321",
  },
  marginTop: "1rem",
  padding: "0.75rem 1.5rem",
  fontWeight: "bold",
};

export const FooterText: SxProps = {
  fontWeight: "bold",
  color: "#888",
  marginTop: "20px",
};

export const StartingPage: SxProps = {
  backgroundImage: "url(/src/assets/dark_chess_background.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  padding: "15px",
  height: "100vh",
  "@media (max-width: 1000px)": {
    padding: "100px",
    width: "auto",
    height: "auto",
  },
};

export const TextAboutMe: SxProps = {
  fontFamily: "'Courier New', Courier, monospace",
  border: "2px solid #0096FF",
  backgroundColor: "#DEEFF5",
  lineHeight: "1.5",
  padding: "15px",
  mb: "15px",
};

export const StartingSection: SxProps = {
  textAlign: "center",
  marginBottom: "15px",
  background: "linear-gradient(-45deg, #ee7752, #ff9b42, #ff6700, #ffa833)",
  backgroundSize: "400% 400%",
  animation: "gradient 8s ease infinite",
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid black",
  "@media (max-width: 1000px)": {
    width: "auto",
    height: "auto",
  },
};

export const AboutUsText: SxProps = {
  background:
    "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  mb: "20px",
  mt: "-74px",
  fontSize: "40px",
  color: "black",
};
export const DownButton: SxProps = {
  backgroundColor: "#0096FF",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  "@media (max-width: 1000px)": {
    width: "auto",
    height: "auto",
  },
  "&:hover": {
    backgroundColor: "#89CFF0",
  },
};

export const AboutUsButton: SxProps = {
  position: "absolute",
  right: "10px",
  top: "10px",
  backgroundColor: "#b87333",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#654321",
  },

  padding: "0.75rem 1.5rem",
  fontWeight: "bold",
};
