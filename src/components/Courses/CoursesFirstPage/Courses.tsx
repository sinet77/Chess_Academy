import { Box, Typography } from "@mui/material";
import * as style from "./Courses.style";

export default function Courses() {
  return (
    <Box sx={style.Container}>
      <Box sx={style.CoursesTile}>Courses</Box>
      <Box sx={style.WhiteTile}>
        <Box sx={style.OneTile}>
          <Box
            component="img"
            sx={style.Image}
            src="/src/assets/pawn_courses.png"
          />
          <Typography sx={style.Header}>Became A Member</Typography>
          <Typography sx={style.Description}>
            It's never too late to start playing chess and now is your chance!
            Create an account and begin learning!
          </Typography>
        </Box>
        <Box sx={style.OneTile}>
          <Box
            component="img"
            sx={style.Image}
            src="/src/assets/coursware_courses.png"
          />
          <Typography sx={style.Header}>Coursware</Typography>
          <Typography sx={style.Description}>
            You will find here many materials and tasks that will help you
            improve your skills to become a better chess player.
          </Typography>
        </Box>
        <Box sx={style.OneTile}>
          <Box
            component="img"
            sx={style.Image}
            src="/src/assets/classes_courses.png"
          />
          <Typography sx={style.Header}>Online Classes</Typography>
          <Typography sx={style.Description}>
            A wide range of individual or group classes that you can take
            advantage of to focus on your weaker and stronger sides of chess.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
