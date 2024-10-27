import { SxProps } from "@mui/material/styles";

export const Container: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem",
  maxWidth: "800px",
  margin: "auto",
  textAlign: "justify",
  backgroundColor: "#eae7e2",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
};

export const Background: SxProps = {
  backgroundColor: "#fffcf3",
  padding: "50px"
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  "@media (max-width: 1000px)": {
    padding: "100px",
    width: "auto",
    height: "auto",
  },
};

export const StartingSection: SxProps = {
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
}

export const AboutUsMainContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "1000px",
  width: "100%",
  padding: "50px",
}

export const AboutUsFirstContainer: SxProps = {
  fontSize: "100px",
  display: "flex",
  justifyContent: "flex-start",
  maxWidth: "1000px",
  width: "100%",
  ml: "-620px"
};

export const AboutUsSecondContainer: SxProps = {
  display: "flex",
  gap: "30px",

};
export const AboutUsSecondContainerTitle: SxProps = {
  fontSize: "150px",
  fontWeight: "500",
  lineHeight: "120px",
  paddingBottom: "50px"
};

export const AboutUsContainerFirstImage = {
  width: "900px",
  borderRadius: "30px"
};

export const AboutUsContainerSecondImage = {
  width: "500px",
  height: "auto",
  borderRadius: "30px"
};
export const phillosophyTitle: SxProps = {
  fontWeight: "500",
  fontSize: "45px",
  mt: "12px",
  mb: "13px"
}

export const foundersContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#eae7e2",
  borderRadius: "50px",
  width: "80%",
  textAlign: "center",
  mt: "100px",
  mb: "100px"
};
export const founderProfilePicture = {
  display: "flex",
  width: "20%",
  borderRadius: "50px"
}
export const FoundersTextContainer: SxProps = {
  backgroundColor: "#fffcf3",
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "30px",
  padding: "30px",
  paddingLeft: "100px",
  paddingRight: "100px",
}
export const WorldMapImageLeft: SxProps = {
  width: "260px",
  height: "100px",
  backgroundImage: 'url(src/assets/chess-world-map.jpg)',
  backgroundSize: '520px 250px',
  backgroundPosition: 'left',
  borderRadius: '40px',
}

export const WorldMapImageRight: SxProps = {
  width: "260px",
  height: "100px",
  backgroundImage: 'url(src/assets/chess-world-map.jpg)',
  backgroundSize: '520px 250px',
  backgroundPosition: 'right',
  borderRadius: '40px',
}

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
