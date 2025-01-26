import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
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
    console.log("updateColors called");
  
    if (!currentUser || !colors) return;
  
    const userDocRef = doc(db, "Users", currentUser.uid);
  
    try {
      console.log("Current colors before update:", colors);
      console.log("New colors to update:", newColors);
  
      await updateDoc(userDocRef, {
        chessboard: {
          ...colors,
          ...newColors,
        },
      });
  
      console.log("Colors successfully updated in Firestore.");
  
      setColors((prevColors) => {
        const updatedColors = { ...prevColors!, ...newColors };
        console.log("Updated Colors (after state change):", updatedColors);
        return updatedColors;
      });
    } catch (error) {
      console.error("Błąd podczas aktualizacji danych szachownicy:", error);
    }
  };
  
  

  return { colors, updateColors };
};
