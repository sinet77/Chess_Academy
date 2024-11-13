import { useEffect } from "react";
import { Puzzle } from "./PuzzleTypes";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.ts";

interface FetchDailyPuzzleProps {
  setPuzzle: (puzzle: Puzzle) => void;
}

const FetchDailyPuzzle = ({ setPuzzle }: FetchDailyPuzzleProps) => {
  const fetchPuzzle = async () => {
    try {
      const response = await fetch("https://api.chess.com/pub/puzzle/random");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching puzzle:", error);
    }
  };

  useEffect(() => {
    const fetchOrSetNewPuzzle = async () => {
      const currentDate = new Date()
        .toLocaleDateString("en-GB")
        .split("/")
        .join("-");
      const docRef = doc(db, "Daily Puzzles", currentDate);

      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const puzzleData = JSON.parse(snap.data()?.pgn || null);
        setPuzzle(puzzleData);
      } else {
        const newPuzzle = await fetchPuzzle();

        if (newPuzzle) {
          setPuzzle(newPuzzle);
          await setDoc(docRef, { pgn: JSON.stringify(newPuzzle) });
        }
      }
    };
    fetchOrSetNewPuzzle();
  }, [setPuzzle]);

  return null;
};

export default FetchDailyPuzzle;
