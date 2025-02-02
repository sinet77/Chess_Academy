import { SxProps } from "@mui/material";

export const Main: SxProps = {
  backgroundColor: "#0D0D0D",
  boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
  padding: "50px",
  textAlign: "center",
  minHeight: "100vh",
};

export const Form: SxProps = {
  borderRadius: "10px",
  display: "flex",
  backgroundColor: "white",
  border: "2px solid #0D0D0D",
  flexDirection: "column",
  gap: 2,
  padding: "50px",
  width: "50%",
  margin: "0 auto",
};

export const FormAndTitle: SxProps = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "auto",
  padding: "50px",
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
  border: "2px solid #0D0D0D",
  color: "#0D0D0D",
  "&:hover": {
    backgroundColor: "#ff6700",
    color: "#0D0D0D",
    transform: "scale(1.1)",
    transition: "all 0.3s ease-in-out",
  },
};

export const TextField: SxProps = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FBFBFB",
    "& > fieldset": { borderColor: "#0D0D0D" },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": { borderColor: "#0D0D0D" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#0D0D0D" },
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
  width: "100%",
  color: "white",
  padding: "60px",
  textAlign: "left",
  position: "relative",
  borderRadius: "0 10px 10px 0",
};

export const GetInTouch: SxProps = {
  color: "#FFFFFF",
  fontFamily: "Playfair Display",
  fontSize: "50px",
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
  fontFamily: "Playfair Display",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "23px",
};

export const FooterIcons: SxProps = {
  display: "flex",
  position: "absolute",
  bottom: "50px",
  gap: "20px",
};
