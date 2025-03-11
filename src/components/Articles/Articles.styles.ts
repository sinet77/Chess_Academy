import { SxProps } from "@mui/system";

export const ArticlesBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#eeeeee",
  padding: "80px",
  minHeight: "500px",
  gap: "50px",
  fontFamily: "Roboto",
  maxWidth: "1800px",
  transition: "min-height 0.3s ease-in-out",
};

export const LoadingContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  minHeight: "500px",
  backgroundColor: "#eeeeee",
  width:"1800px"
};

export const ArticlesContent: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

export const HeadTitle: SxProps = {
  fontWeight: "bold",
  fontSize: "2.2rem",
  color: "#333333",
  textDecoration: "underline",
  textAlign: "center",
  marginBottom: "50px",
};

export const Title: SxProps = {
  fontWeight: "bold",
  fontSize: "1.7rem",
  color: "#0D0D0D",
};

export const PubDate: SxProps = {
  fontStyle: "normal",
  color: "#555",
  fontSize: "1rem",
  marginLeft: "auto",
};

export const Description: SxProps = {
  fontSize: "1.2rem",
  fontFamily: "Roboto",
  color: "#0D0D0D",
};

export const Circular: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

export const ButtonNext: SxProps = {
  color: "white",
  backgroundColor: "#0D0D0D",
  fontWeight: "500",
  lineHeight: "23px",
  padding: "15px 30px",
  width: "50%",
  "&:hover": {
    backgroundColor: "#B6740C",
  },
};
export const ButtonPrev: SxProps = {
  color: "#0D0D0D",
  backgroundColor: "white",
  fontWeight: "500",
  lineHeight: "23px",
  padding: "15px 30px",
  width: "50%",
  "&:hover": {
    backgroundColor: "grey",
    color: "white",
  },
};

export const ButtonContainer: SxProps = {
  display: "flex",
  gap: "20px",
};

export const ReadMore: SxProps = {
  color: "RGB(31, 58, 147)",
  padding: "5px",
  mt: "-15px",
};
