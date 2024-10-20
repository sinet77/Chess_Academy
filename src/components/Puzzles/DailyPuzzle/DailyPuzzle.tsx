import { useState } from "react";
import FetchDailyPuzzle from "./FetchDailyPuzzle";
import { Puzzle } from "./PuzzleTypes";
import DisplayDailyPuzzle from "../DisplayDailyPuzzle";

const DailyPuzzle = () => {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);

  return (
    <div>
      <FetchDailyPuzzle setPuzzle={setPuzzle} />
      <DisplayDailyPuzzle puzzle={puzzle} />
    </div>
  );
};

export default DailyPuzzle;
