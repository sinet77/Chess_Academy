import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../context/authContext";

type ChessboardColors = {
  darkSquare: string;
  lightSquare: string;
};

export const useColorsChessboard = () => {
  const { currentUser } = useAuth();
  const [colors, setColors] = useState<ChessboardColors | null>(null);

  console.log(colors);
  useEffect(() => {
    console.log("currentUser w useColorsChessboard:", currentUser);
  }, [currentUser]);

  useEffect(() => {
    const fetchColors = async () => {
      if (!currentUser) return;

      const userDocRef = doc(db, "Users", currentUser.uid);

      try {
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setColors(userData.chessboard as ChessboardColors);
        } else {
          console.error("Nie znaleziono dokumentu użytkownika.");
        }
      } catch (error) {
        console.error("Błąd podczas pobierania danych szachownicy:", error);
      }
    };

    fetchColors();
  }, [currentUser]);

  const updateColors = async (newColors: Partial<ChessboardColors>) => {
    if (!currentUser) {
      console.warn("Brak użytkownika, przerwanie aktualizacji.");
      return;
    }

    if (!colors) {
      console.warn("Brak danych o kolorach, pobieram dane...");
      return;
    }

    console.log("updateColors called");
    console.log("Aktualne kolory:", colors);
    console.log("Nowe kolory:", newColors);

    const userDocRef = doc(db, "Users", currentUser.uid);

    try {
      await setDoc(userDocRef, {
        "chessboard.darkSquare": newColors.darkSquare ?? colors.darkSquare,
        "chessboard.lightSquare": newColors.lightSquare ?? colors.lightSquare,
      });

      console.log("Firestore zaktualizowane");
      setColors({ ...colors, ...newColors });
    } catch (error) {
      console.error("Błąd aktualizacji Firestore:", error);
    }
  };

  return { colors, updateColors };
};
