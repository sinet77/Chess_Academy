import { SxProps } from "@mui/material";

export const BlackTile: SxProps = {
  backgroundColor: "#000000",
  fontFamily: "Playfair Display",
  fontSize: "81.6px",
  fontWeight: "700",
  lineHeight: "108.77px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "white",
  height: "360px",
};

export const WhiteTile: SxProps = {
  padding: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
};

export const Titles: SxProps = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
};

export const SmallTitle: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "25px",
  fontStyle: "italic",
  fontWeight: "500",
  lineHeight: "34px",
  letterSpacing: "0.1em",
  color: "#B6740C",
};

export const BigTitle: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "52px",
  fontWeight: "600",
  lineHeight: "70px",
  color: "#000000",
};

export const DescriptionHeader: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  color: "#7E7E7E",
};

export const JoinTile: SxProps = {
  padding: "40px 40px 60px 40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",
  backgroundColor: "#000000",
};

export const Button: SxProps = {
  color: "white",
  backgroundColor: "#B6740C",
  fontFamily: "Playfair Display",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "23px",
  textTransform: "none",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "#B0540C",
  },
};

export const TransparentImage: SxProps = {
  width: "300px",
  height: "200px",
};

export const HeadImage: SxProps = {
  height: "500px",
  width: "400px",
  mt: "30px",
  borderRadius: "8px",
};

export const JoinContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "flex-start",
};

export const BenefitsTile: SxProps = {
  backgroundColor: "#000000",
  color: "white",
  padding: "30px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
};

export const BenefitsBigTitle: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "25px",

  fontWeight: "500",
  lineHeight: "34px",
  letterSpacing: "0.1em",
  color: "#FFFFFF",
};

export const BenefitsDescription: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  color: "#FFFFFF",
};

export const Points: SxProps = {
  fontFamily: "Playfair Display",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "23px",
  color: "#FFFFFF",
};

export const Point: SxProps = {
  textAlign: "justify",
  marginBottom: "20px",
  display: "flex",
};

export const CheckIcon: SxProps = {
  marginRight: 2,
  color: "#B6740C",
};

export const List: SxProps = {
  padding: 0,
  marginLeft: 0,
  marginBottom: 20,
  gap: 10,
  listStylePosition: "inside",
};
