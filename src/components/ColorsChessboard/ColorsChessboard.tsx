import { Box } from "@mui/material";
import { useColorsChessboard } from "./useColorsChessboard";
import { useCallback } from "react";
import * as style from "./ColorsChessboard.style";

export const ColorsChessboard = () => {
  const { colors, updateColors, saveColors } = useColorsChessboard();

  const handleColorChange = useCallback(
    (field: "darkSquare" | "lightSquare", value: string) => {
      updateColors({ field, value });
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveColors();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={style.Main}>
      <Box component="label" sx={style.Label}>
        Dark square
        <Box
          component="input"
          type="color"
          value={colors?.darkSquare}
          onChange={(e) => handleColorChange("darkSquare", e.target.value)}
          sx={style.ColorInput}
        />
      </Box>
      <Box component="label" sx={style.Label}>
        Light square
        <Box
          component="input"
          type="color"
          value={colors?.lightSquare}
          onChange={(e) => handleColorChange("lightSquare", e.target.value)}
          sx={style.ColorInput}
        />
      </Box>
      <Box component="button" type="submit">
        Submit
      </Box>
    </Box>
  );
};
