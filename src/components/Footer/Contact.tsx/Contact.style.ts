import { SxProps } from "@mui/material";

export const Navbar: SxProps = {
  backgroundColor: "black",
  height: "112px",
  width: "100%",
};

export const Main: SxProps = {
  backgroundColor: "#FFFFFF",
  boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
  padding: "50px",
  textAlign: "center",
  height: "100vh",
};

export const Form: SxProps = {
  borderRadius: "10px",
  display: "flex",
  backgroundColor: "#D8DFE5",
  border: "2px solid #03707d",
  flexDirection: "column",
  gap: 2,
  padding: "50px",
  width: "50%",
  margin: "0 auto",
};

export const FormAndTitle: SxProps = {
  boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)",
  backgroundImage: "url(/src/assets/pen.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "auto",
  padding: "50px",
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
};

export const Button: SxProps = {
  width: "40%",
  backgroundColor: "#46656F",
  border: "2px solid black",
  color: "white",
  "&:hover": {
    backgroundColor: "#a7e7e1",
    color: "black",
    transform: "scale(1.1)",
  },
};

export const TextField: SxProps = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FBFBFB",
    "& > fieldset": { borderColor: "black" },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": { borderColor: "black" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "black" },
};

export const Alert: SxProps = {
  color: "green",
  fontWeight: "bold",
  border: "1px solid black",
};

export const Map: SxProps = {
  mt: "30px",
  width: "100%",
  height: { xs: "150px", md: "500px" },
};

export const GetInTouchContainer: SxProps = {
  backgroundColor: "black",
  width: "100%",
  color: "white",
  padding: "60px",
  textAlign: "left",
  position: "relative",
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
