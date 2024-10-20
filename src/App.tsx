import { Box } from "@mui/material";

import Articles from "./components/Articles/Articles";
import * as style from "./App.styles";
import TitleAndButtons from "./components/TitleAndButtons/TitleAndButtons";
import DailyPuzzle from "./components/Puzzles/DailyPuzzle/DailyPuzzle";

export default function App() {
  return (
    <Box sx={style.main}>
      <TitleAndButtons />
      <DailyPuzzle />
      <Articles />
    </Box>
  );
}
