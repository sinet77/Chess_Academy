import { Box } from "@mui/material";
import Articles from "./components/Articles/Articles";
import * as style from "./App.styles";
import TitleAndButtons from "./components/TitleAndButtons/TitleAndButtons";
import OurClass from "./components/Courses/OurClass/OurClass";
import HeadBackground from "./components/HeadBackground/HeadBackground";
import DailyPuzzleHomePage from "./components/Puzzles/DailyPuzzle/OnMainPage/DailyPuzzleHomePage";

export default function App() {
  return (
    <Box sx={style.Main}>
      <HeadBackground />
      <TitleAndButtons />
      <DailyPuzzleHomePage />
      <Articles />
      <OurClass />
    </Box>
  );
}
