import { Box } from "@mui/material";

import Articles from "./components/Articles/Articles";
import * as style from "./App.styles";
import TitleAndButtons from "./components/TitleAndButtons/TitleAndButtons";
import OurClass from "./components/Courses/OurClass/OurClass";

export default function App() {
  return (
    <Box sx={style.main}>
      <TitleAndButtons />
      <Articles />
      <OurClass />
    </Box>
  );
}
