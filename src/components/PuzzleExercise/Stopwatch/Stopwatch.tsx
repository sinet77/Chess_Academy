import { useState, useEffect } from "react";
import TimerIcon from "@mui/icons-material/Timer";
import { Box, Typography } from "@mui/material";
import * as style from "./Stopwatch.style";

interface Props {
  moves: string[];
  currentMoveIndex: number;
}

const Stopwatch = ({ moves, currentMoveIndex }: Props) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    if (currentMoveIndex === moves.length) {
      setIsActive(false);
    }
  }, [currentMoveIndex, moves.length]);

  return (
    <Box sx={style.Container}>
      <TimerIcon sx={style.TimerIconStyle} />
      <Box sx={style.TimeNamesContainer}>
        {totalSeconds >= 60 && (
          <>
            <Typography sx={style.TimeFont}>{minutes} min</Typography>
          </>
        )}
        <Typography sx={style.TimeFont}> {seconds} s</Typography>
      </Box>
    </Box>
  );
};

export default Stopwatch;
