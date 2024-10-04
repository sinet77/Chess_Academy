import { Box } from "@mui/material";
import Courses from "./CoursesFirstPage/Courses";
import OurClass from "./OurClass/OurClass";

export default function CoursesPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Courses />
      </Box>
      <Box>
        <OurClass />
      </Box>
    </Box>
  );
}
