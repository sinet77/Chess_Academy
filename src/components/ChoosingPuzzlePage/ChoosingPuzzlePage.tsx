import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import * as style from "./ChoosingPuzzlePage.style";
import dragon from "../../assets/dust.jpg";
import { useNavigate } from "react-router-dom";

interface Props {
  level: string;
  min: number;
  max: number;
}

const DIFFICULTY_LEVELS = [
  { level: "Beginner", min: 200, max: 600 },
  { level: "Easy", min: 601, max: 1000 },
  { level: "Intermediate", min: 1001, max: 1500 },
  { level: "Challenging", min: 1501, max: 2000 },
  { level: "Advanced", min: 2001, max: 2500 },
  { level: "Expert", min: 2501, max: 3000 },
];

const BACKGROUND_POSITIONS = [
  "0% 0%",
  "0% -128px",
  "0% -256px",
  "0% -384px",
  "0% -512px",
  "0% -640px",
];

export default function ChoosingPuzzlePage() {
  const navigate = useNavigate();

  const handleDifficultySelect = ({ level, min, max }: Props) => {
    navigate(`/puzzles/${level.toLowerCase()}`, { state: { min, max } });
  };

  return (
  <Box>
    <Box sx={style.Main}>
      <Typography sx={style.HeadTitle} variant="h5">
        Choose difficulty level:
      </Typography>
      <motion.div initial="hidden" animate="visible" variants={style.container}>
        <Grid container spacing={2}>
          {DIFFICULTY_LEVELS.map(({ level, min, max }, index) => (
            <Grid item xs={12} key={level}>
              <motion.div variants={style.item}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleDifficultySelect({ level, min, max })}
                  sx={{
                    ...style.Button,
                    backgroundImage: `url(${dragon})`,
                    backgroundPosition: BACKGROUND_POSITIONS[index],
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
          </Box>
  );
}
