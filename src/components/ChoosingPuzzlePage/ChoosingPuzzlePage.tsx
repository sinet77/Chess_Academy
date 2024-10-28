import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import * as style from "./ChoosingPuzzlePage.style";
import dragon from "../../assets/dust.jpg";
import { DifficultyLevelProps } from "./ChoosingPuzzlePage.types";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function ChoosingPuzzlePage() {
  const navigate = useNavigate();

  const difficultyLevels = [
    { level: "Beginner", min: 100, max: 500 },
    { level: "Easy", min: 501, max: 1000 },
    { level: "Intermediate", min: 1001, max: 1500 },
    { level: "Challenging", min: 1501, max: 2000 },
    { level: "Advanced", min: 2001, max: 2500 },
    { level: "Expert", min: 2501, max: 3000 },
  ];

  const backgroundPositions = [
    "0% 0%",
    "0% -128px",
    "0% -256px",
    "0% -384px",
    "0% -512px",
    "0% -640px",
  ];

  const handleDifficultySelect = ({
    level,
    min,
    max,
  }: DifficultyLevelProps) => {
    navigate(`/puzzles/${level.toLowerCase()}`, { state: { min, max } });
  };

  return (
    <Box sx={style.Main}>
      <Typography sx={style.HeadTitle} variant="h5">
        Choose difficulty level:
      </Typography>
      <motion.div initial="hidden" animate="visible" variants={container}>
        <Grid container spacing={2}>
          {difficultyLevels.map(({ level, min, max }, index) => (
            <Grid item xs={12} key={level}>
              <motion.div variants={item}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleDifficultySelect({ level, min, max })}
                  sx={{
                    ...style.Button,
                    backgroundImage: `url(${dragon})`,
                    backgroundPosition: backgroundPositions[index],
                  }}
                >
                  {level}
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
