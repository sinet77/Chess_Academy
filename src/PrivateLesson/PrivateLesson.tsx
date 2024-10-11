import { Box, Button, Typography } from "@mui/material";
import * as style from "./PrivateLesson.style";
import { useNavigate } from "react-router-dom";
import {
  chess_set,
  chess_private_lesson,
} from "../assets/PrivateLessonImages.js";
import CheckIcon from "@mui/icons-material/Check";

export default function PrivateLesson() {
  const navigate = useNavigate();

  function handleJoinButtonClick() {
    navigate("/courses");
  }
  return (
    <Box>
      <Box sx={style.BlackTile}>Private Lesson</Box>
      <Box sx={style.WhiteTile}>
        <Box component="img" sx={style.HeadImage} src={chess_private_lesson} />
        <Box sx={style.Titles}>
          <Typography sx={style.SmallTitle}>Private Lesson</Typography>
          <Typography sx={style.BigTitle}>
            Learn Chess From A Distance In Your Home
          </Typography>
          <Typography sx={style.DescriptionHeader}>
            Years of teaching experience have allowed us to develop an
            individual curriculum for each student at different levels of
            advancement
          </Typography>
        </Box>
        <Box sx={style.BenefitsTile}>
          <Typography sx={style.BenefitsBigTitle}>
            Benefits of online classes
          </Typography>
          <Typography sx={style.BenefitsDescription}>Description</Typography>
          <Box component="ul" sx={style.List}>
            <Box component="li" sx={style.Point}>
              <CheckIcon sx={style.CheckIcon} />
              Convenience: Learn from anywhere, anytime, without commuting.
            </Box>
            <Box component="li" sx={style.Point}>
              <CheckIcon sx={style.CheckIcon} />
              Personalized Coaching: Lessons are tailored to your individual
              skill level.
            </Box>
            <Box component="li" sx={style.Point}>
              <CheckIcon sx={style.CheckIcon} />
              Interactive Tools: Engage with live demonstrations and game
              analysis.
            </Box>
            <Box component="li" sx={style.Point}>
              <CheckIcon sx={style.CheckIcon} />
              After classes: You get notes from the classes and extra tasks.
            </Box>
            <Box component="li" sx={style.Point}>
              <CheckIcon sx={style.CheckIcon} />
              Cost-Effective: Save on travel and get affordable, quality
              instruction.
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={style.JoinTile}>
        <Box component="img" sx={style.TransparentImage} src={chess_set} />
        <Box sx={style.JoinContainer}>
          <Typography sx={{ ...style.BigTitle, color: "white" }}>
            Join And Become A Better Player!
          </Typography>
          <Typography sx={{ ...style.DescriptionHeader, color: "#FFFFFF" }}>
            Sign up for classes now and check your possibilities!
          </Typography>
          <Button onClick={handleJoinButtonClick} sx={style.Button}>
            Join
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
