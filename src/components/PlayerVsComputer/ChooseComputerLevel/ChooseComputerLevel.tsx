import { Box, Button, Grid, Typography } from "@mui/material";
import {
  cartoon_curly,
  cartoon_girl,
  cartoon_girlBlueHair,
  cartoon_girlV2,
  cartoon_happy,
  cartoon_sad,
  cartoon_longHair,
  cartoon_crazy,
} from "../../../assets/ChooseComputerLevelImages";
import * as style from "./ChooseComputerLevel.style";
import { useNavigate } from "react-router-dom";

export default function ChooseComputerLevel() {
  const navigate = useNavigate();

  const characters = [
    {
      image: cartoon_sad,
      level: "Novice",
      description:
        "I'm not very aggressive, perfect for beginners. Let's play!",
    },
    {
      image: cartoon_crazy,
      level: "Learner",
      description: "I make friendly, beginner-friendly moves.",
    },
    {
      image: cartoon_happy,
      level: "Apprentice",
      description: "I love surprises and can catch you off guard!",
    },
    {
      image: cartoon_curly,
      level: "Challenger",
      description: "I'm balanced - not too easy, but not too hard.",
    },
    {
      image: cartoon_girl,
      level: "Strategist",
      description: "My moves can surprise even seasoned players!",
    },
    {
      image: cartoon_girlBlueHair,
      level: "Expert",
      description: "I know complex strategies; prepare yourself!",
    },
    {
      image: cartoon_girlV2,
      level: "Master",
      description: "I'm very challenging and lay traps for my opponents.",
    },
    {
      image: cartoon_longHair,
      level: "Grandmaster",
      description: "I'm an expert player - only the best can beat me.",
    },
  ];

  const handleDifficultySelect = ({ level }: { level: string }) => {
    navigate(`/play/computer/${level.toLowerCase()}`, { state: { level } });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "#eeeeee",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {characters.map(({ image, level, description }, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} sx={{ display: "flex" }}>
            <Button
              variant="outlined"
              sx={style.CharacterBox}
              onClick={() => handleDifficultySelect({ level })}
            >
              <img
                src={image}
                alt="cartoon button"
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "0.5rem",
                }}
              />
              <Typography variant="h6" sx={style.LevelTitle}>
                {level}
              </Typography>
              <Typography variant="subtitle1" sx={style.Description}>
                {description}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
