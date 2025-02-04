import { useState } from "react";
import { doc,updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../context/authContext";

type ChessboardColors = {
  darkSquare: string;
  lightSquare: string;
};

export const useColorsChessboard = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const [colors, setColors] = useState<ChessboardColors>({
    darkSquare: currentUser?.chessboard?.darkSquare || "#000000",
    lightSquare: currentUser?.chessboard?.lightSquare || "#ffffff",
  });

  const updateColors = (newColor: {
    field: "darkSquare" | "lightSquare";
    value: string;
  }) => {
    setColors((prev) => ({ ...prev, [newColor.field]: newColor.value }));
  };

  const saveColors = async () => {
    if (!currentUser) {
      console.warn("Brak użytkownika, przerwanie aktualizacji.");
      return;
    }
    const userDocRef = doc(db, "Users", currentUser.id);
    await updateDoc(userDocRef, {
      chessboard: colors,
    });
    setCurrentUser({ ...currentUser, chessboard: colors });
  };

  return { colors, updateColors, saveColors };
};
