import { Box } from "@mui/material";

export const ColorsChessboard = () => {
  return (
    <Box>
      <label>
        Dark square{" "}
        <input type="color" />
      </label>
      <label>
        Light square{" "}
        <input type="color" />
      </label>
    </Box>
  );
};