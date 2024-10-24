import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import * as style from "./AboutUs.style";
import { guidelines } from "./AboutUs.constants";

export default function AboutUsStartingPage({
  buttonClick,
}: {
  buttonClick: () => void;
}) {

  return (
    <Box sx={style.StartingPage}>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "50px" }}>
        <Box sx={style.AboutUsFirstContainer}>
          <Typography sx={style.AboutUsSecondContainerTitle}>ABOUT</Typography>
        </Box >
        <Grid sx={style.AboutUsSecondContainer} >
          <Box sx={{ width: "50%" }}>
            <Typography sx={style.AboutUsSecondContainerTitle}>US</Typography>
            <Typography>
              We are currently the sole developers working on improving the Chess Academy website. As an active players and certified instructors, we created this platform to offer a space where we can control the content and share our learning materials with students. In the future, we plan to bring on others to help maintain and grow this idea of combining playing and learning chess in one place.
            </Typography>
          </Box>

          <Box>
            <img src="src/assets/chess-board-aboutUs.jpeg" style={style.AboutUsContainerFirstImage} />
          </Box>

          <Box>
            <img src="src/assets/chess-pieces-aboutUs.jpeg" style={style.AboutUsContainerSecondImage} />
            <Typography sx={style.phillosophyTitle}>Our Phillosophy</Typography>
            <Typography>
              Chess Academy is designed for everyone, regardless of age or skill level. Whether you're looking to play games or solve puzzles, we provide various levels of difficulty to suit all preferences. Our mission is to create an accessible and enjoyable environment for learning and mastering chess. We welcome you to join and enjoy the experience!
            </Typography>
          </Box>
        </Grid>
      </Box>


      <Box sx={style.foundersContainer}>
        <img src="src/assets/piotr-image.png" style={style.founderProfilePicture} />
        <Box sx={{
          backgroundColor: "#fffcf3",
          width: "100%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "30px",
          padding: "30px",
          paddingLeft: "100px",
          paddingRight: "100px"
        }}>
          <Typography variant="h2" sx={{ fontWeight: "500", mb: "30px" }}>MEET THE FOUNDERS</Typography>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "260px",
                height: "100px",
                backgroundImage: 'url(src/assets/chess-world-map.jpg)',
                backgroundSize: '520px 250px',
                backgroundPosition: 'left',
                borderRadius: '40px',
              }}
            />
            <Box
              sx={{
                width: "260px",
                height: "100px",
                backgroundImage: 'url(src/assets/chess-world-map.jpg)',
                backgroundSize: '520px 250px',
                backgroundPosition: 'right',
                borderRadius: '40px',
              }}
            />
          </Box>
          <Typography sx={{ mt: "50px" }}>
            Two brothers decided to create this awesome app to help you become a better version of yourself and improve your skills. Welcome to Chess Academy!
          </Typography>
        </Box>
        <img src="src/assets/pawel-image.png" style={style.founderProfilePicture} />
      </Box>
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Grid container spacing={3}>
          {guidelines.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? "-100vw" : "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 20 }}
              >
                <Box sx={style.StartingSection}>
                  <Typography sx={style.SubTitle} variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography sx={style.Description}>{item.description}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>



      <Button sx={style.DownButton} onClick={buttonClick}>
        Help us to improve
      </Button>
    </Box>
  );
}
