import { useState, useEffect } from "react";
import TimerIcon from "@mui/icons-material/Timer";
import { Box, Typography } from "@mui/material";
import * as style from "./Timer.style";

const Timer = ({
  isTurnedOn,
  onTimerEnd,
}: {
  isTurnedOn: boolean;
  onTimerEnd: () => void;
}) => {
  const [totalSeconds, setTotalSeconds] = useState(10);

  useEffect(() => {
    if (!isTurnedOn || totalSeconds <= 0) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev - 1);
    }, 1000);

    if (totalSeconds === 0) {
      onTimerEnd();
    }

    return () => clearInterval(interval);
  }, [isTurnedOn, totalSeconds, onTimerEnd]);

  return (
    <Box sx={style.Container}>
      <TimerIcon sx={style.TimerIconStyle} />
      <Box sx={style.TimeNamesContainer}>
        <Typography sx={style.TimeFont}> {totalSeconds} s</Typography>
      </Box>
    </Box>
  );
};

export default Timer;
