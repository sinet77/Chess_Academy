import { useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
 interface Puzzle {
    title: string;
    comments: string;
    url: string;
    fen: string;
    pgn: string;
    image: string;
  }
  
const useDailyPuzzle = (setPuzzle: (puzzle: Puzzle) => void) => {
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
};
export default useDailyPuzzle;


