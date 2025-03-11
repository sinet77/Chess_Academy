import { SxProps } from "@mui/material";

export const Main: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: "#0D0D0D",
  boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
  padding: { xs: "5px", md: "20px" },
  textAlign: "center",
};

export const Form: SxProps = {
  borderRadius: "10px",
  display: "flex",
  backgroundColor: "white",
  border: "1px solid #0D0D0D",
  flexDirection: "column",
  gap: 2,
  padding: "50px",
  width: { md: "50%" },
  margin: "0 auto",
};

export const FormAndTitle: SxProps = {
  height: "auto",
  padding: { xs: "5px", md: "40px" },
  backgroundColor: "grey",
  borderRadius: "10px 0 0 10px",
};

export const Text: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: "20px",
};

export const Paragraph: SxProps = {
  fontSize: "17px",
  fontWeight: "bold",
  color: "#0D0D0D",
};

export const Button: SxProps = {
  width: "40%",
  backgroundColor: "orange",
  border: "1px solid #0D0D0D",
  color: "#0D0D0D",
  boxShadow: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "orange",
    color: "#0D0D0D",
    boxShadow: "none",
    transform: "scale(1.1)",
  },
};

export const TextField: SxProps = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FBFBFB",
    "& > fieldset": { borderColor: "#838383" },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": { borderColor: "#838383" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#838383" },
};

export const Alert: SxProps = {
  color: "green",
  fontWeight: "bold",
  border: "1px solid #0D0D0D",
};

export const Map: SxProps = {
  mt: "30px",
  width: "100%",
  height: { xs: "150px", md: "500px" },
};

export const GetInTouchContainer: SxProps = {
  backgroundColor: "#333333",
  color: "white",
  padding: "50px",
  textAlign: "left",
  position: "relative",
  borderRadius: "0 10px 10px 0",
  width: "100%",
};

export const GetInTouch: SxProps = {
  color: "#FFFFFF",
  fontSize: "52px",
  fontWeight: "600",
  lineHeight: "70px",
  mb: "50px",
};

export const IconAndNameContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  mb: "30px",
};

export const Icon: SxProps = {
  color: "#B6740C",
  height: "25px",
  width: "25px",
};
export const PointTitle: SxProps = {
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "23px",
};

export const FooterIcons: SxProps = {
  display: "flex",
  position: "absolute",
  bottom: "30px",
  gap: "20px",
};
