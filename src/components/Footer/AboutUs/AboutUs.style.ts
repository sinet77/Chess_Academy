import { SxProps } from "@mui/material/styles";

export const Container: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  maxWidth: "800px",
  margin: "auto",
  backgroundColor: "#eae7e2",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
};

export const Background: SxProps = {
  backgroundColor: "#fffcf3",
  padding: {xs:"20px",sm:"50px"},
};

export const Title: SxProps = {
  fontWeight: "bold",
  color: "#0D0D0D",
  marginTop:"50px"
};

export const SubTitle: SxProps = {
  fontWeight: "bold",
  color: "#0D0D0D",
  marginTop: "15px",
};

export const Description: SxProps = {
  color: "#0D0D0D",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "15px",
};

export const Section: SxProps = {
  textAlign: "left",
  marginBottom: "18px",
  backgroundColor: "#fffcf3",
  padding: "15px",
  borderRadius: "8px",
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
  backgroundColor: "#fffcf3",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 600px)": {
    padding: "30px",
    width: "auto",

  },
};

export const Items: SxProps = {
  padding: { xs: "0px", sm: "30px" },
  maxWidth: { xs: "300px", sm: "700px", md: "1800px" },
  margin: "auto",
};

export const Item: SxProps = {
  textAlign: "center",
  marginBottom: "15px",
  background: "linear-gradient(-45deg, #fffcf3, #eae7e2)",
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
  border: "2px solid #eae7e2",
  "@media (max-width: 1000px)": {
    width: "auto",
    height: "auto",
  },
};

export const Main: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "1100px",
  width: "100%",
  padding: {xs:"20px", md:"50px"},
};

export const TitleContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
};
export const Header: SxProps = {
  fontSize: {xs:"3rem", md:"5rem"},
  textAlign: "center",
  fontWeight: "500",
  paddingBottom: "30px",

};

export const StartingPageFirstImage = {
  width: { xs: "250px", md: "1100px" },
  borderRadius: "30px",
};

export const StartingPageSecondImage = {
  width: { xs: "250px", md: "500px" },
  height: "auto",
  borderRadius: "30px",
};
export const phillosophyTitle: SxProps = {
  fontWeight: "500",
  fontSize: "2.5rem",
};

export const DownButton: SxProps = {
  backgroundImage: "url(./src/assets/questions-background.png)",
  backgroundPosition: "right center",
  fontSize: "17px",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  mt: "50px",
  mb: "50px",
  transition: "transform 0.3s ease",
  "@media (max-width: 1000px)": {
    width: "auto",
    height: "auto",
  },
  "&:hover": {
    transform: "scale(1.1)",
  },
};

export const AboutUsButton: SxProps = {
  position: "absolute",
  right: "20px",
  top: "20px",
  backgroundColor: "#b87333",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#654321",
  },
  padding: "0.75rem 1rem",
  fontWeight: "bold",
};
