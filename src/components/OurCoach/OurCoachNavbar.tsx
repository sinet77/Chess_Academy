import { Box, Button, Grid2 as Grid, Link, Typography } from "@mui/material";
import * as style from "./OurCouch.style";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function OurCoach() {
  const navigate = useNavigate();

  function handleJoinButtonClick() {
    navigate("/courses");
  }
  return (
    <Box>
      <Box sx={style.CouchTile}>Our Coach</Box>
      <Grid container spacing={2} justifyContent="center" padding="80px">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography sx={style.SmallTitle}>Our Coach</Typography>
          <Typography sx={style.BigTitle}>
            We Have Inherited Technique
          </Typography>
          <Typography sx={style.DescriptionHeader}>
            Years of teaching experience have allowed us to develop an
            individual curriculum for each student at different levels of
            advancement
          </Typography>
          <Box
            component="img"
            sx={style.HeadImage}
            src="/src/assets/ourCouch.jpg"
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          // sx={style.ImgWithNameBox}
        >
          <Box
            component="img"
            sx={style.Image}
            src="/src/assets/ja_portret.jpg"
          />
          <Box sx={style.FooterBox}>
            <Box sx={style.NameAndRole}>
              <Typography sx={style.Name}>Paweł Kozłowski</Typography>
              <Typography sx={style.Role}>Main Coach</Typography>
            </Box>
            <Box sx={style.Links}>
              <Link
                href="https://www.linkedin.com/in/pawe%C5%82-koz%C5%82owski-69b29521b/"
                color="inherit"
              >
                <LinkedIn />
              </Link>
              <Link href="https://github.com/sinet77" color="inherit">
                <GitHub />
              </Link>
              <Link href="https://facebook.com" color="inherit">
                <Facebook />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={style.GreyTile}>
        <Typography sx={style.SmallTitle}>Why Choose Us?</Typography>
        <Typography sx={style.BigTitle}>We Have An Amazing Strategy</Typography>
        <Typography sx={{ ...style.DescriptionHeader, color: "#000000" }}>
          Our personalized approach ensures each student receives targeted
          coaching, helping them excel at every stage of their chess journey.
          With cutting-edge tools and methodologies, we empower players to
          unlock their full potential.
        </Typography>
        <Box
          component="img"
          sx={style.StepsImage}
          src="/src/assets/123_steps.webp"
        />
      </Box>
      <Grid
        sx={style.BlackTile}
        container
        spacing={1}
        justifyContent="center"
        padding="80px"
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            sx={style.TransparentImage}
            src="/src/assets/chess_set.png"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} direction="column">
          <Typography sx={{ ...style.BigTitle, color: "white" }}>
            Join And Become A Better Player!
          </Typography>
          <Typography sx={{ ...style.DescriptionHeader, color: "#FFFFFF" }}>
            Sign up for classes now and check your possibilities!
          </Typography>
          <Button onClick={handleJoinButtonClick} sx={style.Button}>
            Join
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
