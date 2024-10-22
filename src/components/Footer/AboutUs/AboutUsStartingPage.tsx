import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import * as style from "./AboutUs.style";

export default function AboutUsStartingPage({
  buttonClick,
}: {
  buttonClick: () => void;
}) {
  const guidelines = [
    {
      title: "Play with your friend",
      description:
        "You can have fun and challenge your friend to play chess with you and test your skills!",
    },
    {
      title: "Test yourself against computer",
      description:
        "Choose level of difficulty and face computer empowered with most popular chess engines",
    },
    {
      title: "Solve puzzles",
      description:
        "Be ready to solve the most difficult chess puzzles or easier ones if you wish for :)",
    },
    {
      title: "Analyze your games",
      description:
        "Use our powerful analysis tools to review your matches, spot mistakes, and improve your skills",
    },
    {
      title: "Explore the community",
      description:
        "Engage with other players in our forums, share tips, and join discussions on various chess topics",
    },
  ];

  return (
    <Box sx={style.StartingPage}>
      <Box sx={style.AboutUsFirstContainer}>
        <Typography sx={style.AboutUsSecondContainerTitle}>ABOUT</Typography>
      </Box>
      <Box sx={style.AboutUsSecondContainer}>
        <Box sx={{ width: "50%" }}>
          <Typography sx={style.AboutUsSecondContainerTitle}>US</Typography>
          <Typography>
            We are currently the sole developer working on improving the Chess Academy website. As an active player and certified instructor, I created this platform to offer a space where I can control the content and share my learning materials with students. In the future, I plan to bring on others to help maintain and grow this idea of combining playing and learning chess in one place.
          </Typography>
        </Box>

        <Box>
          <img src="src/assets/chess-board-aboutUs.jpeg" style={style.AboutUsContainerFirstImage} />
        </Box>

        <Box>
          <img src="src/assets/chess-pieces-aboutUs.jpeg" style={style.AboutUsContainerSecondImage} />
          <Typography>Our Phillosophy</Typography>
          <Typography>
            Chess Academy is designed for everyone, regardless of age or skill level. Whether you're looking to play games or solve puzzles, we provide various levels of difficulty to suit all preferences. Our mission is to create an accessible and enjoyable environment for learning and mastering chess. We welcome you to join and enjoy the experience!
          </Typography>
        </Box>
      </Box>

      <Box sx={style.foundersContainer}>
        <img src="src/assets/piotr-image.png" style={style.founderProfilePicture} />
      </Box>
      {guidelines.map((item, index) => (
        <motion.div
          key={index}
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
      ))}

      <Button sx={style.DownButton} onClick={buttonClick}>
        Help us to improve
      </Button>
    </Box>
  );
}
