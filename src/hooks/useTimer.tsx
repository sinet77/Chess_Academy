import { useState, useEffect, useRef } from "react";

interface UseTimerOptions {
  initialTime: number; 
  format: "seconds" | "minutes" | "both"; 
  direction: 1 | -1; 
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
  

          if (direction === -1 && nextValue <= 0) {
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
  



  const formattedTime = () => {
    if (format === "seconds") return `${totalSeconds} s`;
    if (format === "minutes") return `${Math.floor(totalSeconds / 60)} min`;
    if (format === "both")
      return `${Math.floor(totalSeconds / 60)} min ${totalSeconds % 60} s`;
  };

  return { totalSeconds, formattedTime };
};


