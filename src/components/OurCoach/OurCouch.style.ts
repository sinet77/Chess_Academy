import { SxProps } from "@mui/material";

export const CouchTile: SxProps = {
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

export const WhiteTile: SxProps = {
  padding: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",
};

export const FooterBox: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
};

export const Image: SxProps = {
  height: "497px",
  width: "350px",
};

export const HeadImage: SxProps = {
  height: "300px",
  width: "300px",
  mt: "30px",
  borderRadius: "8px",
};

export const Name: SxProps = {
  color: "#7E7E7E",
  fontFamily: "Playfair Display",
  fontSize: "23px",
  fontWeight: "600",
  lineHeight: "34px",
  letterSpacing: "0.05em",
};

export const Role: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  color: "#000000",
};

export const ImgWithNameBox: SxProps = {
  width: "350px",
};

export const Links: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "10px",
};

export const GreyTile: SxProps = {
  backgroundColor: "#C3C3C3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "80px",
  gap: "30px",
};

export const BlackTile: SxProps = {
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

export const StepsImage: SxProps = {
  width: "400px",
  height: "350px",
  borderRadius: "8px",
};
