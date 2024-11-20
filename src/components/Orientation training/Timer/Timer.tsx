import { useState, useEffect, useRef } from "react";
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
  const [totalSeconds, setTotalSeconds] = useState(30);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isTurnedOn) {
      setTotalSeconds(30);
      return
    }
      if (intervalRef.current) return

        intervalRef.current = setInterval(() => {
          setTotalSeconds((prev) => {
            if (prev > 0) {
              return prev-1
            }
              clearInterval(intervalRef.current!);
              intervalRef.current = null;
              onTimerEnd();
              return 0;   
            
          });
        }, 1000);
      

    return () => {
      if (!isTurnedOn && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isTurnedOn, onTimerEnd]);

  return (
    <Box sx={style.Container}>
      <TimerIcon sx={style.TimerIconStyle} />
      <Box sx={style.TimeNamesContainer}>
        <Typography sx={style.TimeFont}>{totalSeconds} s</Typography>
      </Box>
    </Box>
  );
};

export default Timer;
