import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import * as style from "./ChoosingPuzzlePage.style";
import dragon from "../../assets/dust.jpg";

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
  const difficultyLevels = [
    "Beginner",
    "Easy",
    "Intermediate",
    "Challenging",
    "Advanced",
    "Expert",
  ];

  const backgroundPositions = [
    "0% 0%",
    "0% -128px",
    "0% -256px",
    "0% -384px",
    "0% -512px",
    "0% -640px",
  ];

  return (
    <Box sx={style.Main}>
      <Typography sx={style.HeadTitle} variant="h5">
        Choose difficulty level:
      </Typography>
      <motion.div initial="hidden" animate="visible" variants={container}>
        <Grid container spacing={2}>
          {difficultyLevels.map((level, index) => (
            <Grid item xs={12} key={level}>
              <motion.div variants={item}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    width: "100vw",
                    backgroundImage: `url(${dragon})`,
                    backgroundSize: "100% 600%",
                    backgroundPosition: backgroundPositions[index],
                    height: "128px",
                    color: "white",
                    textShadow: `
                    -2px -2px 0 black,  
                     2px -2px 0 black,  
                    -2px  2px 0 black,  
                     2px  2px 0 black   
                  `,
                    fontWeight: "bold",
                    fontSize: "2rem",
                    textTransform: "none",
                    fontFamily: "Playful Display",
                    boxShadow: 1,
                    overflow: "hidden",
                    "&:hover": {
                      opacity: 0.5,
                    },
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
