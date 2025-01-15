import { Box } from "@mui/material";
import { useColorsChessboard } from "./useColorsChessboard";

export const ColorsChessboard = () => {
  const { colors, updateColors } = useColorsChessboard();

  const handleColorChange = (
    field: "darkSquare" | "lightSquare",
    value: string
  ) => {
    updateColors({ [field]: value });
  }
    return (
      <Box>
        <label>
          Dark square{" "}
          <input
            type="color"
            value={colors?.darkSquare}
            onChange={(e) => handleColorChange("darkSquare", e.target.value)}
          />
        </label>
        <label>
          Light square{" "}
          <input
            type="color"
            value={colors?.lightSquare}
            onChange={(e) => handleColorChange("lightSquare", e.target.value)}
          />
        </label>
      </Box>
    );
  };

