import { useState, useEffect } from "react";
import { StopwatchProps } from "./Stopwatch.types";
import TimerIcon from "@mui/icons-material/Timer";
import { Box } from "@mui/material";
import * as style from "./Stopwatch.style";

const Stopwatch = ({ moves, currentMoveIndex }: StopwatchProps) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

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
      <TimerIcon />
      <div>
        {totalSeconds >= 60 && (
          <>
            <span>{minutes} min</span>
            <span> </span>
          </>
        )}
        <span>{seconds} s</span>
      </div>
    </Box>
  );
};

export default Stopwatch;
