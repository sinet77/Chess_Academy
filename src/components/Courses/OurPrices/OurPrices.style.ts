import { SxProps } from "@mui/material";

export const Main: SxProps = {
  backgroundColor: "white",
  padding: "60px 20px",
  
};

export const Titles: SxProps = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "20px",
  mb: "50px",
};

export const SmallTitle: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "25px",
  fontStyle: "italic",
  fontWeight: "500",
  lineHeight: "34px",
  letterSpacing: "0.1em",
  color: "#B6740C",
  textAlign: "center",
};

export const BigTitle: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "52px",
  fontWeight: "600",
  lineHeight: "70px",
  color: "#0D0D0D",
  textAlign: "center",
};

export const DescriptionHeader: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  color: "#7E7E7E",
};

export const OneBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "10px",
  border: "1px solid #0D0D0D",
  padding: "80px 50px",
};

export const Level: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "23px",
  fontWeight: "600",
  lineHeight: "34px",
  color: "#0D0D0D",
  letterSpacing: "0.05em",
};

export const Description: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "23px",
  color: "#0D0D0D",
};

export const Boxes: SxProps = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
  columnGap: "30px",
  rowGap: "30px",
};

export const Button: SxProps = {
  color: "white",
  backgroundColor: "#0D0D0D",
  fontFamily: "Playfair Display",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "23px",
  textTransform: "none",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "#B6740C",
  },
};

export const ReadMoreButton: SxProps = {
  color: "white",
  backgroundColor: "#0D0D0D",
  fontFamily: "Playfair Display",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "23px",
  textTransform: "none",
  padding: "15px 30px",
  "&:hover": {
    backgroundColor: "#ff4d01",
    transform: "scale(1.1)"
  },
};

export const Price = {
  fontFamily: "Playfair Display",
  fontSize: "50px",
  fontWeight: "700",
};

export const PriceTitle = {
  fontFamily: "Playfair Display",
  fontSize: "23px",
  fontWeight: "550",
  marginLeft: "10px",
};

export const List: SxProps = {
  padding: 0,
  marginLeft: 0,
  gap: 10,
  listStylePosition: "inside",
};

export const Point: SxProps = {
  textAlign: "left",
  marginBottom: "20px",
};
