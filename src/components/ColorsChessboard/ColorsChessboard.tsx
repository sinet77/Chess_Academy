import { Box } from "@mui/material";
import { useColorsChessboard } from "./useColorsChessboard";
import { useAuth } from "../../context/authContext";
import { useCallback, useEffect } from "react";
import * as style from "./ColorsChessboard.style";

export const ColorsChessboard = () => {
  const { colors, updateColors, saveColors } = useColorsChessboard();
  const { currentUser } = useAuth();

  const handleColorChange = useCallback(
    (field: "darkSquare" | "lightSquare", value: string) => {
      updateColors({ field, value });
    },
    []
  );

  useEffect(() => {
    if (currentUser) {
      console.log("User data:", currentUser);
    }
  }, [handleColorChange, currentUser]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        Light square{" "}
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
