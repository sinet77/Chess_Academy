import { SxProps } from "@mui/system";

export const ArticlesBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#C3C3C3",
  padding: "20px",
  height: "auto",
  gap: "20px",
};

export const Title: SxProps = {
  fontWeight: "bold",
  fontSize: "23px",
};

export const PubDate: SxProps = {
  fontStyle: "italic",
  color: "black",
  fontWeight: "bold",
};

export const Circular: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

export const ButtonNext: SxProps = {
  color: "white",
  backgroundColor: "#000000",
  fontFamily: "Playfair Display",
  fontSize: "20px",
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
  fontFamily: "Playfair Display",
  fontSize: "20px",
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
  fontSize: "22px",
};
