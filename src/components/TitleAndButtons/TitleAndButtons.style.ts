import { SxProps } from "@mui/material";

export const Background: SxProps = {
  backgroundColor: 
}

export const TileContainer: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(3, auto)",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  marginBottom: "20px",
};

export const Title: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px",
  marginBottom: "30px",
};

export const ImageButtonContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "160px",
  height: "200px",
  backgroundColor: "#292929",
  borderRadius: "8px",
  border: "1px solid white",
};

export const ButtonImage: React.CSSProperties = {
  width: "160px",
  height: "200px",
  marginBottom: "8px",
  borderRadius: "8px",
};
export const TitleUnderButtonImage: React.CSSProperties = {
  textTransform: "none",
  color: "white",
  paddingBottom: "10px",
  fontWeight: "bold",
  fontSize: "15px",
};

export const TitleText: SxProps = {
  color: "blue",
  letterSpacing: "0.0015em",
  fontFamily: '"Henny Penny", cursive',
  fontSize: "40px",
  textShadow: `
      0 1px #8da1ff, 
      -1px 0 #c0cbff, 
      -1px 2px #8da1ff, 
      -2px 1px #c0cbff, 
      -2px 3px #8da1ff, 
      -3px 2px #c0cbff, 
      -3px 4px #8da1ff, 
      -4px 3px #c0cbff, 
      -4px 5px #8da1ff, 
      -5px 4px #c0cbff, 
      -5px 6px #8da1ff, 
      -6px 5px #c0cbff, 
      -6px 7px #8da1ff, 
      -7px 6px #c0cbff, 
      -7px 8px #8da1ff, 
      -8px 7px #c0cbff
    `,
};

export const SubtitleText: SxProps = {
  color: "white",
  letterSpacing: "0.0015em",
  fontFamily: "Henny Penny",
  fontSize: "35px",
  textShadow: `
  0 1px rgba(0, 0, 0, 0.7), 
  -1px 0 rgba(0, 0, 0, 0.7), 
  -1px 2px rgba(0, 0, 255, 0.5), 
  -2px 1px rgba(0, 0, 0, 0.7), 
  -2px 3px rgba(0, 0, 255, 0.5), 
  -3px 2px rgba(0, 0, 0, 0.7), 
  -3px 4px rgba(0, 0, 255, 0.5), 
  -4px 3px rgba(0, 0, 0, 0.7), 
  -4px 5px rgba(0, 0, 255, 0.5), 
  -5px 4px rgba(0, 0, 0, 0.7), 
  -5px 6px rgba(0, 0, 255, 0.5), 
  -6px 5px rgba(0, 0, 0, 0.7), 
  -6px 7px rgba(0, 0, 255, 0.5), 
  -7px 6px rgba(0, 0, 0, 0.7), 
  -7px 8px rgba(0, 0, 255, 0.5), 
  -8px 7px rgba(0, 0, 0, 0.7)
`,
};
