import { Box } from "@mui/material";
import { useColorsChessboard } from "./useColorsChessboard";
import { useAuth } from "../../context/authContext";
import { useCallback, useEffect } from "react";
import * as style from "./ColorsChessboard.style";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const updateColorsInFirestore = async (id: string, darkSquare: string, lightSquare: string) => {
  try {
    const userRef = doc(db, "Users", id);
    await setDoc(userRef, { chessboard: { darkSquare, lightSquare } }, { merge: true });
    console.log("Colors updated in Firestore");
  } catch (error) {
    console.error("Error updating colors:", error);
  }
};


export const ColorsChessboard = () => {
  const { colors, updateColors } = useColorsChessboard();
  const { currentUser } = useAuth();

  const handleColorChange = useCallback((
    field: "darkSquare" | "lightSquare",
    value: string
  ) => {
    console.log(`Changing color field: ${field} to value: ${value}`);
    updateColors({ [field]: value });

    if (currentUser) {
      updateColorsInFirestore(
        currentUser.id,
        field === "darkSquare" ? value : currentUser.chessboard.darkSquare,
        field === "lightSquare" ? value : currentUser.chessboard.lightSquare
      );
    }
  },[]);

  useEffect(() => {
    if (currentUser) {
      console.log("User data:", currentUser);
    }
  }, [handleColorChange, currentUser]);

  return (
    <Box sx={style.Main}>
      <Box component="label" sx={style.Label}>
        Dark square
        <Box
          component="input"
          type="color"
          value={currentUser?.chessboard?.darkSquare}
          onChange={(e) => handleColorChange("darkSquare", e.target.value)}
          sx={style.ColorInput}
        />
      </Box>
      <Box component="label" sx={style.Label}>
        Light square{" "}
        <Box
          component="input"
          type="color"
          value={currentUser?.chessboard?.lightSquare}
          onChange={(e) => handleColorChange("lightSquare", e.target.value)}
          sx={style.ColorInput}
        />
      </Box>
    </Box>
  );
};
