import errorGif from "/src/assets/error404.gif";
import * as style from "./Error404.style";
import { Grid, Button, Typography, Box } from "@mui/material";
import { routes } from "../../routes";

export default function Error404() {
  return (
    <Grid
      container
      sx={style.Background}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={10} 
        sm={7} 
        md={5} 
        lg={3} 
        sx={style.MainContent}
      >
        <Typography variant="h4" sx={style.Title}>
          Error 404
        </Typography>
        <Typography variant="h5" sx={style.Title}>
          Page not found
        </Typography>
        <Button
          variant="contained"
          color="error"
          href={routes.home}
          sx={{ mb: 2 }}
        >
          Return home
        </Button>
        <Box
          component="img"
          src={errorGif}
          alt="Animated gif"
          sx={style.Gif}
        />
      </Grid>
    </Grid>
  );
}
