import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import * as style from "./AboutUs.style";
import GroupsIcon from "@mui/icons-material/Groups";

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
      <Box sx={style.AboutUsText}>
        About us
        <GroupsIcon fontSize="large" />
      </Box>
      <Box sx={style.TextAboutMe}>
        For now, I am the only developer who is working at improving Chess
        Academy website. In some time I will also be looking for other people
        who will help me maintain and develop my idea of playing and learning
        chess. I came up with this idea, when I was teaching chess online,
        because I am active player and certified instructor. My goal was to do
        my own website, where I can control the content which is apearing and
        put my learning materials in one place for the students. Chess academy
        is for everyone, on various level or age. Whether you want to play chess
        games or solve puzzles, there are always different levels of difficulty,
        so everyone can choose what they want. Chess Academy welcomes you!
        Enjoy!
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
