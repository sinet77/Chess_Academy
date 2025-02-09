import { Box } from "@mui/material";
import Courses from "./CoursesFirstPage/Courses";
import OurClass from "./OurClass/OurClass";
import OurPrices from "./OurPrices/OurPrices";

export default function CoursesPage() {
  return (
    <Box sx={{backgroundColor: "#0D0D0D",}}>
      <Courses />
      <OurClass />
      <OurPrices />
    </Box>
  );
}
