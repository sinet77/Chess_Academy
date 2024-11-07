import { useEffect } from "react";
import { Puzzle } from "./PuzzleTypes";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.js";

interface FetchDailyPuzzleProps {
  setPuzzle: (puzzle: Puzzle) => void;
}

const FetchDailyPuzzle = ({ setPuzzle }: FetchDailyPuzzleProps) => {
  const fetchPuzzle = async () => {
    try {
      const response = await fetch("https://api.chess.com/pub/puzzle/random");
      const data = await response.json();
      console.log("Fetched new puzzle:", data);
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
      console.log("Snapshot exists:", snap.exists());
      console.log("Snapshot data:", snap.data());

      if (snap.exists()) {
        const data = snap.data();
        if (data) {
          const puzzleData = JSON.parse(data.pgn);
          setPuzzle(puzzleData.pgn);
          console.log("Loaded puzzle from Firestore:", puzzleData);
        }
      } else {
        const newPuzzle = await fetchPuzzle();

        if (newPuzzle) {
          setPuzzle(newPuzzle);
          await setDoc(docRef, { pgn: JSON.stringify(newPuzzle) });
          console.log("Saved new puzzle to Firestore");
        }
      }
    };

    fetchOrSetNewPuzzle();
  }, [setPuzzle]);

  return null;
};

export default FetchDailyPuzzle;
