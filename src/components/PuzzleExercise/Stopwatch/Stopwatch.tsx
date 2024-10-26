import { useState, useEffect } from "react";
import { StopwatchProps } from "./Stopwatch.types";

const Stopwatch = ({
  startOnNewPuzzle,
  moves,
  currentMoveIndex,
}: StopwatchProps) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (startOnNewPuzzle) {
      let interval: NodeJS.Timeout | null = null;

      if (isActive) {
        interval = setInterval(() => {
          setTotalSeconds((prev) => prev + 1);
        }, 1000);
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }
    [isActive];
  });

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    if (currentMoveIndex === moves.length) {
      setIsActive(false);
    }
  }, [currentMoveIndex, moves.length]);

  return (
    <div>
      <div>
        {totalSeconds >= 60 && (
          <>
            <span>{minutes} min</span>
            <span> </span>
          </>
        )}
        <span>{seconds} s</span>
      </div>
    </div>
  );
};

export default Stopwatch;
