import { SxProps } from "@mui/system";

export const ArticlesBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#C3C3C3",
  padding: "80px",
  height: "auto",
  gap: "50px",
  fontFamily: "Roboto",
  maxWidth: "1800px",
  width:"100%"
};

export const Title: SxProps = {
  fontWeight: "bold",
  fontSize: "2rem",
};

export const PubDate: SxProps = {
  fontStyle: "normal",
  color: "#555",
  fontSize: "1rem",
  marginLeft: "auto"
};

export const Description: SxProps = {fontSize: "1.2rem", fontFamily: "Roboto",}

export const Circular: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

export const ButtonNext: SxProps = {
  color: "white",
  backgroundColor: "#000000",
  fontWeight: "500",
  lineHeight: "23px",
  padding: "15px 30px",
  width: "50%",
  "&:hover": {
    backgroundColor: "#B6740C",
  },
};
export const ButtonPrev: SxProps = {
  color: "#000000",
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
