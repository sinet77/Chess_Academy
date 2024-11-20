import DisplayDailyPuzzle from "./DisplayDailyPuzzle";
import { Puzzle } from "../PuzzleTypes";
import { useState } from "react";
import useDailyPuzzle from "../../../../hooks/useDailyPuzzle";

const DailyPuzzle = () => {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);

  useDailyPuzzle(setPuzzle);

  return (
    <div>
      <DisplayDailyPuzzle puzzle={puzzle} />
    </div>
  );
};

export default DailyPuzzle;
