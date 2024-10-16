import { Box, Typography } from "@mui/material";
import * as style from "./OurClass.style";
import {
  pawn_classes,
  strategy,
  champion_strategy,
  time,
  knight,
  classes,
} from "../../../assets/CoursesImages.js";

export default function OurClass() {
  return (
    <Box sx={style.Main}>
      <Box sx={style.Titles}>
        <Typography sx={style.SmallTitle}>Our Class</Typography>
        <Typography sx={style.BigTitle}>
          Participating and learning from our classes
        </Typography>
        <Typography sx={style.DescriptionHeader}>
          Discover your possibilities and immerse yourself in the world of chess
          that you have never known before!
        </Typography>
      </Box>
      <Box sx={style.Tiles}>
        <Box sx={style.OneTile}>
          <Box component="img" sx={style.Image} src={pawn_classes} />
          <Typography sx={style.Header}>Chess For Beginner</Typography>
          <Typography sx={style.Description}>
            Start learning chess from the very beginning.
          </Typography>
        </Box>
        <Box sx={style.OneTile}>
          <Box component="img" sx={style.Image} src={strategy} />
          <Typography sx={style.Header}>Classic Strategies</Typography>
          <Typography sx={style.Description}>
            Solve tasks from the easiest level possible.
          </Typography>
        </Box>
        <Box sx={style.OneTile}>
          <Box component="img" sx={style.Image} src={champion_strategy} />
          <Typography sx={style.Header}>Champion Strategies</Typography>
          <Typography sx={style.Description}>
            Master solving puzzles to become a champion of puzzles!
          </Typography>
        </Box>
        <Box sx={style.OneTile}>
          <Box component="img" sx={style.Image} src={time} />
          <Typography sx={style.Header}>Notions Of Time</Typography>
          <Typography sx={style.Description}>
            Be patient, study consistently and you will quickly see the results
            of your work.
          </Typography>
        </Box>
        <Box sx={style.OneTile}>
          <Box component="img" sx={style.Image} src={knight} />
          <Typography sx={style.Header}>Opponent's Thoughts</Typography>
          <Typography sx={style.Description}>
            Theory is good but remember to always practice by playing chess
            games and analyze your and your opponent's moves.
          </Typography>
        </Box>
        <Box sx={style.OneTile}>
          <Box
            component="img"
            sx={{ height: "120px", width: "120px" }}
            src={classes}
          />
          <Typography sx={style.Header}>Online Classes</Typography>
          <Typography sx={style.Description}>
            Check out our offer of online classes, take part in a lesson and see
            for yourself!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
