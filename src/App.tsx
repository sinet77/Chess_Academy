import { Box } from "@mui/material";
import Articles from "./components/Articles/Articles";
import * as style from "./App.styles";
import TitleAndButtons from "./components/TitleAndButtons/TitleAndButtons";
import DailyPuzzleHomePage from "./components/Puzzles/DailyPuzzle/OnMainPage/DailyPuzzleHomePage";

export default function App() {
  return (
    <Box sx={style.main}>
      <TitleAndButtons />
      <DailyPuzzleHomePage />
      <Articles />
    </Box>
  );
}
