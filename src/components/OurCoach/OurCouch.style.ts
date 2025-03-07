import { SxProps } from "@mui/material";

export const CouchTile: SxProps = {
  backgroundColor: "#0D0D0D",
  fontFamily: "Playfair Display",
  fontSize: {xs:"50px", sm:"81px"},
  fontWeight: "700",
  lineHeight: "108.77px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "white",
  height:{xs:"400px", sm:"635px"},
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
  color: "#0D0D0D",
};

export const DescriptionHeader: SxProps = {
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "30px",
  color: "#7E7E7E",
};

export const WhiteTile: SxProps = {
  padding: { xs:"60px 20px", md: "100px" },
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
  columnGap: "30px",
  rowGap: "30px",
  justifyItems: "center",
  alignItems: "center",
  backgroundColor: "white",
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
  color: "#0D0D0D",
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
  color: "#0D0D0D",
};

export const GreyTile: SxProps = {
  backgroundColor: "#EEEEEE",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  flexDirection: "column",
  padding: "80px",
  gap: "30px",
};

export const BlackTile: SxProps = {
  padding: "40px 40px 60px 40px",
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr", lg: "repeat(2, max-content)" },
  justifyItems: "center",
  justifyContent:"center", 
  alignItems: "center", 
  gap: "100px", 
  margin: "0 auto", 
  backgroundColor: "#0D0D0D",
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
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#B0540C",
  },
};

export const LinkButton: SxProps = {
  ...Button,
  marginTop: "40px",
  padding: "15px 30px",
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

export const JoinContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "flex-start",
};
