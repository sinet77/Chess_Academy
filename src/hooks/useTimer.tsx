import { useState, useEffect, useRef, useMemo } from "react";

export enum TimerDirection {
  Forward = 1,
  Backward = -1,
}
interface UseTimerOptions {
  initialTime: number;
  format: "seconds" | "minutes" | "both";
  direction: TimerDirection;
  isTurnedOn: boolean;
  onTimerEnd?: () => void;
}

export const useTimer = ({
    initialTime,
    isTurnedOn,
    format,
    onTimerEnd,
    direction
  }: UseTimerOptions) => {
    const [totalSeconds, setTotalSeconds] = useState(initialTime);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      
        if (!isTurnedOn) {
            setTotalSeconds(initialTime);
            return
          }
  
      if (intervalRef.current) return;
  

      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          const nextValue = prev + direction; 
  

          if (direction === TimerDirection.Backward && nextValue <= 0) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            onTimerEnd?.();
            return 0; 
          }
  
          return nextValue;
        });
      }, 1000);
  
      return () => {
        if (!isTurnedOn && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }, [isTurnedOn, onTimerEnd, initialTime]);
  



    const formattedTime = useMemo(() => {  
      if (format === "seconds") return `${totalSeconds} s`;  
      if (format === "minutes") return `${Math.floor(totalSeconds / 60)} min`;  
      if (format === "both")  
        return `${Math.floor(totalSeconds / 60)} min ${totalSeconds % 60} s`;  
    }, [format, totalSeconds]); 

  return { totalSeconds, formattedTime };
};


