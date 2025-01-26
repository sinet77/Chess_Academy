import { Box } from "@mui/material";
import { useColorsChessboard } from "./useColorsChessboard";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";

export const ColorsChessboard = () => {
  const { colors, updateColors } = useColorsChessboard();

  const {currentUser} = useAuth();

  const handleColorChange = (
    field: "darkSquare" | "lightSquare",
    value: string
  ) => {
    console.log(`Changing color field: ${field} to value: ${value}`);
    updateColors({ [field]: value });

  }

  useEffect(() => {
    if (currentUser) {
      console.log("User data:", currentUser);
    }
  }, [handleColorChange, currentUser]);
  
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

