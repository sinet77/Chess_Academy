import { useState, useEffect } from "react";
import TimerIcon from "@mui/icons-material/Timer";
import { Box, Typography } from "@mui/material";
import * as style from "./Timer.style";

const Timer = ({ isTurnedOn }: { isTurnedOn: boolean }) => {
  const [totalSeconds, setTotalSeconds] = useState(30);

  useEffect(() => {
    if (!isTurnedOn || totalSeconds <= 0) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isTurnedOn, totalSeconds]);

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
