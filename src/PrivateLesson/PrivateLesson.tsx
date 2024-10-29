import { Box, Button, Typography, Link } from "@mui/material";
import * as style from "./PrivateLesson.style";
import { Link as RouterLink } from "react-router-dom";
import {
  chess_set,
  chess_private_lesson,
} from "../assets/PrivateLessonImages.ts";
import CheckIcon from "@mui/icons-material/Check";
import StarRateIcon from "@mui/icons-material/StarRate";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { Face, Face3 } from "@mui/icons-material";

export default function PrivateLesson() {
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
          <Typography sx={style.QuoteText}>
            “You may learn much more from a game you lose than from a game you
            win.” — Jose Capablanca
          </Typography>
        </Box>
        <Box sx={style.BenefitsTile}>
          <Typography sx={style.BenefitsBigTitle}>
            Benefits of online classes
          </Typography>
          <Typography sx={style.BenefitsDescription}>
            Online chess lessons offer a flexible and effective way to improve
            your skills without the need to travel. With personalized coaching
            and interactive tools, you can progress at your own pace, from the
            comfort of your home. Discover the many advantages that make online
            learning a perfect fit for chess enthusiasts of all levels.
          </Typography>
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
          <Link to={"/courses"} component={RouterLink}>
            <Button sx={style.Button}>Join</Button>
          </Link>
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
          <Link
            to={"https://www.e-korepetycje.net/pawel608/szachy"}
            component={RouterLink}
          >
            <Button sx={style.ReadButton}>Read More</Button>
          </Link>
        </Box>
        <Box sx={style.StarOpinion}>
          {Array.from({ length: 5 }, (_, index) => (
            <StarRateIcon key={index} sx={style.Stars} />
          ))}
          <Typography sx={{ ...style.DescriptionHeader, color: "#000000" }}>
            Professional classes, fantastic approach to the student. My son is
            delighted. I recommend it wholeheartedly and thank you on behalf of
            myself and my son.
          </Typography>
          <FormatQuoteOutlinedIcon sx={style.QuoteIcon} />
          <Box sx={style.NameContainer}>
            <Face3 sx={style.Face} />
            <Box>
              <Typography sx={style.Name}>Olga</Typography>
              <Typography sx={style.Role}>Student's mom</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={style.StarOpinion}>
          {Array.from({ length: 5 }, (_, index) => (
            <StarRateIcon key={index} sx={style.Stars} />
          ))}
          <Typography sx={{ ...style.DescriptionHeader, color: "#000000" }}>
            I highly recommend it, fantastic individual approach to the student,
            thanks to which I increased my playing strength after just a few
            lessons
          </Typography>
          <FormatQuoteOutlinedIcon sx={style.QuoteIcon} />
          <Box sx={style.NameContainer}>
            <Face sx={style.Face} />
            <Box>
              <Typography sx={style.Name}>Michał</Typography>
              <Typography sx={style.Role}>Student</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
