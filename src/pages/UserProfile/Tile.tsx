import { Box, Typography } from "@mui/material";
import * as style from "./UserProfile.style";
import { ReactNode } from "react";

interface TileProps {
  title: string;
  children: ReactNode;
}

export const Tile = ({ title, children }: TileProps) => {
  return (
    <Box sx={style.Item}>
      <Typography variant="h6">{title}</Typography>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "2rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
