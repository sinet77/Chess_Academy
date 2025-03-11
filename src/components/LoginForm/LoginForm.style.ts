import { SxProps, Theme } from "@mui/material/styles";

export const Main: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F5E3D0", 
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "400px",
  height: "600px",
};
export const WebLogo: SxProps = { height: "180px", marginBottom: "20px" };

export const Text: SxProps<Theme> = {
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: "#5A3E2B", 
  fontFamily: "Roboto, sans-serif",
  textAlign: "center",
  marginBottom: "1.5rem",
};

export const SocialButtons: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  width: "100%",
};

export const GoogleButton: SxProps<Theme> = {
  fontFamily: "Roboto, sans-serif",
  textTransform: "none",
  fontWeight: "bold",
  backgroundColor: "#DB4437",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  width: "100%",
  borderRadius: "8px",
  padding: "10px",
  transition:"ease-in-out all 0.3s",
  "&:hover": {
    backgroundColor: "#C1351D",
  },
};

export const Divider: SxProps<Theme> = {
  color: "#7D5A44",
  fontFamily: "Roboto, sans-serif",
  width: "100%",
  margin: "1rem 0",
  "&::before, &::after": {
    borderColor: "#C4A484",
  },
};

export const Form: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
};

export const TextField: SxProps<Theme> = {
  "& .MuiInputBase-input": {
    color: "#5A3E2B",
  },
  "& .MuiInputLabel-root": {
    color: "#7D5A44",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#C4A484",
    },
    "&:hover fieldset": {
      borderColor: "#7D5A44",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5A3E2B",
    },
  },
};

export const Button: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: "bold",
  backgroundColor: "#5A3E2B",
  width:"100%",
  color: "#fff",
  padding: "12px",
  borderRadius: "8px",
  transition:"ease-in-out all 0.3s",
  "&:hover": {
    backgroundColor: "#3E2B1F",
  },
};

export const Centered: SxProps<Theme> = {
  fontSize: "0.9rem",
  fontFamily:"Roboto",
  color: "#7D5A44",
  textAlign: "center",
  marginTop: "1rem",
  "& a": {
    color: "#5A3E2B",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};
