import { SxProps } from "@mui/system";

export const FAQContainer: SxProps = {
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "top",
  minHeight: "100vh",
  backgroundColor: "#fffcf3",
  padding: "50px",
};

export const titleContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mb: "30px"
};

export const questionsWordInTitle: SxProps = {
  backgroundImage: "url(./src/assets/questions-background.png)",
  backgroundSize: "cover",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: "bold",
  fontSize: "75px",
  textAlign: "center",
  marginTop: "10px",
  backgroundPosition: "left center",
};

export const Title: SxProps = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "75px",
  marginBottom: "0",
  color: "#333",
};

export const Accordion: SxProps = {
  marginBottom: "15px",
  borderRadius: "8px",
  backgroundColor: "#f8f4eb",
  width: "50%",
  padding: "13px 13px",
  boxShadow: "0 3px 15px rgb(0 0 0 / 0.2)",
  '&:before': { height: '0px' },
};

export const AccordionSummary: SxProps = {
  borderRadius: "8px",
};

export const Question: SxProps = {
  fontWeight: "bold",
};

export const Answer: SxProps = {
  color: "#555",
  backgroundColor: "FFDBBB",
};

export const footerContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "500px",
  mt: "70px"
}
export const footertitle: SxProps = {
  fontWeight: "bold",
  fontSize: "25px"
}
export const footerInfo: SxProps = {
  fontSize: "17px",
  mt: "15px",
  mb: "15px"
}

export const contactButton: SxProps = {
  fontSize: "17px",
  border: "none",
  color: "white",
  backgroundImage: "url(./src/assets/questions-background.png)",
  backgroundPosition: "right center",
}

