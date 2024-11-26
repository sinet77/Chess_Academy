import { useEffect } from "react";
import TimerIcon from "@mui/icons-material/Timer";
import { Box, Typography } from "@mui/material";
import * as style from "./Stopwatch.style";
import { useTimer } from "../../../hooks/useTimer";
import {TimerDirection} from "../../../hooks/useTimer"

interface Props {
  moves: string[];
  currentMoveIndex: number;
  isTurnedOn: boolean;
  onTimerEnd: () => void;
}

const Stopwatch = ({ moves, currentMoveIndex, isTurnedOn, onTimerEnd }: Props) => {

  const { formattedTime } = useTimer({
    initialTime: 0, 
    format: "both", 
    direction: TimerDirection.Forward, 
    isTurnedOn: isTurnedOn, 
    onTimerEnd, 
  });
  
  useEffect(() => {
    if (currentMoveIndex === moves.length) {
      onTimerEnd();
    }
  }, [currentMoveIndex, moves.length, onTimerEnd]);

  return (
    <Box sx={style.Container}>
      <TimerIcon sx={style.TimerIconStyle} />
      <Box sx={style.TimeNamesContainer}>
        <Typography sx={style.TimeFont}> {formattedTime}</Typography>
      </Box>
    </Box>
  );
};

export default Stopwatch;
