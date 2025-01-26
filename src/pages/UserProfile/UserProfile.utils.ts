import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";


export const fetchUserById = async (userId: string) => {
  try {
    const userRef = doc(db, "Users", userId); 
    const userSnapshot = await getDoc(userRef); 

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data(); 
      console.log("User data:", userData);
      return userData;
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};