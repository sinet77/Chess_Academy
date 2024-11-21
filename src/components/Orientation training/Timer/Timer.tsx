import TimerIcon from "@mui/icons-material/Timer";
import { Box, Typography } from "@mui/material";
import { useTimer } from "../../../hooks/useTimer"; 
import {TimerDirection} from "../../../hooks/useTimer"
import * as style from "./Timer.style";

const Timer = ({
  isTurnedOn,
  onTimerEnd,
}: {
  isTurnedOn: boolean;
  onTimerEnd: () => void;
}) => {
  const { formattedTime } = useTimer({
    initialTime: 30, 
    format: "seconds", 
    direction: TimerDirection.Backward, 
    isTurnedOn: isTurnedOn, 
    onTimerEnd, 
  });

  return (
    <Box sx={style.Container}>
      <TimerIcon sx={style.TimerIconStyle} />
      <Box sx={style.TimeNamesContainer}>
        <Typography sx={style.TimeFont}>{formattedTime}</Typography>
      </Box>
    </Box>
  );
};

export default Timer;
