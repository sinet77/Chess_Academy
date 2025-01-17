import { useEffect, useState } from "react";
import { doc, getDoc,updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.ts";
import { useAuth } from "../../context/authContext/index.tsx";

type ChessboardColors = {
  darkSquare: string;
  lightSquare: string;
};

export const useColorsChessboard = () => {
  const { currentUser } = useAuth();
  const [colors, setColors] = useState<ChessboardColors | null>(null);

  useEffect(() => {
    const fetchColors = async () => {
      if (!currentUser) return
        const chessboardColorsRef = doc(
          db,
          "Users",
          currentUser.uid,
          "chessboard",
          "chessboardDocId"
        );
        try {
          const chessboardColorsDocSnapshot = await getDoc(chessboardColorsRef);
  
          if (chessboardColorsDocSnapshot.exists()) {
            const data = chessboardColorsDocSnapshot.data() as ChessboardColors;
            setColors(data);
          } else {
            console.error("Nie znaleziono dokumentu z kolorami w bazie danych.");
          }
        } catch (error) {
          console.error("Błąd podczas pobierania kolorów:", error);
        }
      };
  
      fetchColors();
    }, [currentUser]);

    const updateColors = async (newColors: Partial<ChessboardColors>) => {
      if (!currentUser || !colors) return;
  
      const chessboardColorsRef = doc(
        db,
        "Users",
        currentUser.uid,
        "chessboard",
        "chessboardDocId"
      );
  
      try {
        await updateDoc(chessboardColorsRef, newColors);
        setColors((prevColors) => ({ ...prevColors!, ...newColors }));
      } catch (error) {
        console.error("Błąd podczas aktualizacji kolorów:", error);
      }
    };
  
    return { colors, updateColors };
  };



