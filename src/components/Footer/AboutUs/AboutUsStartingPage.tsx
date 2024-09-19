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
      <Box sx={style.AboutUsText}>About us</Box>
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
        Help us
      </Button>
    </Box>
  );
}
