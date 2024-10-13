import { Box, Button, Typography } from "@mui/material";
import * as style from "./PrivateLesson.style";
import { useNavigate } from "react-router-dom";
import {
  chess_set,
  chess_private_lesson,
} from "../assets/PrivateLessonImages.js";
import CheckIcon from "@mui/icons-material/Check";
import StarRateIcon from "@mui/icons-material/StarRate";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

export default function PrivateLesson() {
  const navigate = useNavigate();

  function handleJoinButtonClick() {
    navigate("/courses");
  }

  function handleReadMeButtonClick() {
    window.location.href = "https://www.e-korepetycje.net/pawel608/szachy";
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
      <Box sx={style.ReviewsTile}>
        <Box sx={style.Titles}>
          <Typography sx={style.SmallTitle}>Opinions</Typography>
          <Typography sx={style.BigTitle}>
            What They Said After Class
          </Typography>
          <Typography sx={{ ...style.DescriptionHeader, color: "#000000" }}>
            Years of teaching experience have allowed us to develop an
            individual curriculum for each student at different levels of
            advancement
          </Typography>
          <Button onClick={handleReadMeButtonClick} sx={style.ReadButton}>
            Read More
          </Button>
        </Box>
        <Box sx={style.StarOpinion}>
          {Array.from({ length: 5 }, (_, index) => (
            <StarRateIcon key={index} sx={{ color: "#B6740C" }} />
          ))}
          <Typography sx={{ ...style.DescriptionHeader, color: "#000000" }}>
            Professional classes, fantastic approach to the student. My son is
            delighted. I recommend it wholeheartedly and thank you on behalf of
            myself and my son.
          </Typography>
          <FormatQuoteOutlinedIcon
            sx={{
              color: "#C3C3C3",
              fontSize: "70px",
              position: "absolute",
              top: "0",
              right: "0",
              zIndex: 0,
            }}
          />
        </Box>
        <Box sx={style.StarOpinion}>
          {Array.from({ length: 5 }, (_, index) => (
            <StarRateIcon key={index} sx={{ color: "#B6740C" }} />
          ))}
          <Typography sx={{ ...style.DescriptionHeader, color: "#000000" }}>
            I highly recommend it, fantastic individual approach to the student,
            thanks to which I increased my playing strength after just a few
            lessons
          </Typography>
          <FormatQuoteOutlinedIcon
            sx={{
              color: "#C3C3C3",
              fontSize: "70px",
              position: "absolute",
              top: "0",
              right: "0",
              zIndex: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
