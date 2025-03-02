import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import * as style from "./AboutUs.style";
import { GUIDELINES } from "./AboutUs.constants";
import {
  chessBoardAboutUs,
  chessPieciesAboutUs,
} from "../../../assets/AboutUsImages";

export default function AboutUsStartingPage({
  buttonClick,
}: {
  buttonClick: () => void;
}) {
  return (
    <Grid sx={style.StartingPage}>
      <Box sx={style.Main}>
        <Box sx={style.TitleContainer}>
          <Typography sx={style.Header}>ABOUT US</Typography>
        </Box>
        <Grid gap={5} container>
          <Box>
            <Typography sx={{ textAlign: "justify", fontSize: "1.3rem" }}>
              I am currently the sole developer working on improving the Chess
              Academy website. As an active player and certified instructor, I
              created this platform to offer a space where I can control the
              content and share my learning materials with students. In the
              future, I plan to bring on others to help maintain and grow this
              idea of combining playing and learning chess in one place.
            </Typography>
          </Box>

          <Box
            component="img"
            src={chessBoardAboutUs}
            sx={style.StartingPageFirstImage}
          />

          <Box
            sx={{
              display: "flex",
              gap: "50px",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box
              component="img"
              src={chessPieciesAboutUs}
              sx={style.StartingPageSecondImage}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: { xs: "center", md: "justify" },
              }}
            >
              <Typography sx={style.phillosophyTitle}>
                Our Phillosophy
              </Typography>
              <Typography sx={{ textAlign: "justify", fontSize: "1.3rem" }}>
                Chess Academy is designed for everyone, regardless of age or
                skill level. Whether you're looking to play games or solve
                puzzles, we provide various levels of difficulty to suit all
                preferences. Our mission is to create an accessible and
                enjoyable environment for learning and mastering chess. We
                welcome you to join and enjoy the experience!
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box sx={style.Items}>
        <Grid container spacing={3}>
          {GUIDELINES.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? "-100vw" : "100vw",
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 20 }}
              >
                <Box sx={style.Item}>
                  <Typography sx={style.SubTitle} variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography sx={style.Description}>
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button sx={style.DownButton} onClick={buttonClick}>
        Help us to improve
      </Button>
    </Grid>
  );
}
