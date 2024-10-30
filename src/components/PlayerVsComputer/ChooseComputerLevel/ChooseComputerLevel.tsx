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

const characters = [
  {
    image: cartoon_sad,
    level: "Easy",
    description: "I'm not very aggressive, perfect for beginners. Let's play!",
  },
  {
    image: cartoon_crazy,
    level: "Easy",
    description: "I am friendly and make beginner-friendly moves.",
  },
  {
    image: cartoon_happy,
    level: "Medium",
    description: "I love surprises and can catch you off guard!",
  },
  {
    image: cartoon_curly,
    level: "Medium",
    description: "I'm a balanced character, not too easy, but not too hard.",
  },
  {
    image: cartoon_girl,
    level: "Medium",
    description: "My strategies can surprise even the best players!",
  },
  {
    image: cartoon_girlBlueHair,
    level: "Hard",
    description: "I know complex strategies; prepare yourself!",
  },
  {
    image: cartoon_girlV2,
    level: "Hard",
    description: "I am very challenging, and I prepare traps for beginners.",
  },
  {
    image: cartoon_longHair,
    level: "Hard",
    description:
      "I'm an expert player; you'll need deep thinking to counter my moves.",
  },
];

export default function ChooseComputerLevel() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {characters.map((character, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} sx={{ display: "flex" }}>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                textAlign: "center",
                padding: 2,
              }}
              onClick={() => console.log(`Selected level: ${character.level}`)}
            >
              <img
                src={character.image}
                alt={`cartoon-${index}`}
                style={{ width: "80%", height: "auto", marginBottom: "0.5rem" }}
              />
              <Typography variant="h6">{character.level}</Typography>
              <Typography variant="body2">{character.description}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
