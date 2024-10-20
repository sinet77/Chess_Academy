import { useEffect } from "react";
import { Puzzle } from "./PuzzleTypes";

interface FetchDailyPuzzleProps {
  setPuzzle: (puzzle: Puzzle) => void;
}

const FetchDailyPuzzle = ({ setPuzzle }: FetchDailyPuzzleProps) => {
  const fetchPuzzle = async () => {
    try {
      const response = await fetch("https://api.chess.com/pub/puzzle/random");
      const data = await response.json();
      console.log("Fetched Puzzle Data:", data);
      setPuzzle(data);
      localStorage.setItem("lastPuzzle", JSON.stringify(data));
      localStorage.setItem("lastFetchTime", Date.now().toString());
    } catch (error) {
      console.error("Error fetching puzzle:", error);
    }
  };

  useEffect(() => {
    const lastFetchTime = localStorage.getItem("lastFetchTime");
    const now = Date.now();

    if (!lastFetchTime || now - parseInt(lastFetchTime) > 86400000) {
      fetchPuzzle();
    } else {
      const savedPuzzle = localStorage.getItem("lastPuzzle");
      if (savedPuzzle) {
        setPuzzle(JSON.parse(savedPuzzle));
      }
    }

    const interval = setInterval(fetchPuzzle, 86400000);
    return () => clearInterval(interval);
  }, []);
  return null;
};

export default FetchDailyPuzzle;
