import { SxProps } from "@mui/system";

export const FAQContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "top",
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
  padding: "50px",
};

export const Title: SxProps = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#333",
};

export const Accordion: SxProps = {
  marginBottom: "20px",
  borderRadius: "8px",
  width: "50%",
};

export const AccordionSummary: SxProps = {
  backgroundColor: "#FFDBBB",
  border: "1px solid black",
  borderRadius: "8px",
};

export const Question: SxProps = {
  fontWeight: "bold",
};

export const Answer: SxProps = {
  color: "#555",
  backgroundColor: "FFDBBB",
};
