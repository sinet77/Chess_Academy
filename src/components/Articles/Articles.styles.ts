import { SxProps } from "@mui/system";

export const ArticlesBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "RGB(197, 239, 247)",
  gap: "20px",
  padding: "20px",
  height: "auto",
};

export const Title: SxProps = {
  fontWeight: "bold",
  fontSize: "23px",
};

export const PubDate: SxProps = {
  fontStyle: "italic",
  color: "grey",
  fontWeight: "bold",
};

export const Circular: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

export const ButtonPrev: SxProps = {
  backgroundColor: "white",
  color: "RGB(34, 167, 240)",
  border: "1px solid RGB(44, 62, 80)",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: "RGB(68, 108, 179)",
    color: "white",
  },
};

export const ButtonNext: SxProps = {
  backgroundColor: "RGB(34, 167, 240);",
  border: "1px solid RGB(44, 62, 80)",
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
