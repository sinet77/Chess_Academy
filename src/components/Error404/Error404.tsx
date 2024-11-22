import errorGif from "/src/assets/error404.gif";
import * as style from "./Error404.style";

import { Box, Button, Typography } from "@mui/material";
import { routes } from "../../routes";

export default function Error404() {
  return (
    <Box sx={style.Background}>
      <Box sx={style.MainContent}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Error 404
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Page not found
        </Typography>
        <Button variant="contained" color="error" href={routes.home} sx={{ mb: 2 }}>
          Return home
        </Button>
        <Box
          component="img"
          src={errorGif}
          alt="Animated gif"
          sx={{ width: "100%", maxWidth: "400px", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
