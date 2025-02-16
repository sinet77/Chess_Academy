import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import playVsComputer from "../../../assets/playvscomputer.jpg";
import * as style from "./ChooseComputerLevel.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  whiteChoice,
  blackChoice,
  randomChoice,
} from "../../../assets/ChooseComputerLevelImages";
import { CHARACTERS } from "./Characters";


export default function ChooseComputerLevel() {
  const [selectedColor, setSelectedColor] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleDifficultySelect = ({ level }: { level: string }) => {
    navigate(`/play/computer/${level.toLowerCase()}`, {
      state: { level, color: selectedColor },
    });
  };

  return (
    <Box>
      <Box
        sx={{ ...style.HeadImage, backgroundImage: `url(${playVsComputer})` }}
      >
        <Typography sx={style.Title}>Will you beat the computer?</Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: "10px", color: "white" }}
        >
          Choose your color:
        </Typography>
        <ButtonGroup sx={{ gap: "10px" }} aria-label="Your color for the start">
          <Button
            onClick={() => handleButtonClick("white")}
            sx={{
              ...style.ButtonForChoice,
              opacity: selectedColor === "white" ? 1 : 0.5,
            }}
          >
            <img src={whiteChoice} alt="White king" style={style.ButtonImage} />
          </Button>
          <Button
            onClick={() => handleButtonClick("random")}
            sx={{
              ...style.ButtonForChoice,
              opacity: selectedColor === "random" ? 1 : 0.5,
            }}
          >
            <img
              src={randomChoice}
              alt="Random choice"
              style={style.ButtonImage}
            />
          </Button>
          <Button
            onClick={() => handleButtonClick("black")}
            sx={{
              ...style.ButtonForChoice,
              opacity: selectedColor === "black" ? 1 : 0.5,
            }}
          >
            <img src={blackChoice} alt="Black king" style={style.ButtonImage} />
          </Button>
        </ButtonGroup>
      </Box>
      <Box sx={style.Container}>
        <Grid container spacing={4} justifyContent="center">
          {CHARACTERS.map(({ image, level, description }, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={index}
              sx={{ display: "flex" }}
            >
              <Button
                variant="outlined"
                sx={style.CharacterBox}
                onClick={() => handleDifficultySelect({ level })}
              >
                <img src={image} alt="cartoon button" style={style.Image} />
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
    </Box>
  );
}
