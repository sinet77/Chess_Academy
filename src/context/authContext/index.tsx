import React, { useContext, useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../firebase/firebase.ts";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import {
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";

interface LoggedUser extends User {
  login: string;
  id:string;
  email: string;
  chessboard?: {
    darkSquare: string;
    lightSquare: string;
  };
}

interface AuthContextType {
  userLoggedIn: boolean;
  isEmailUser: boolean;
  isGoogleUser: boolean;
  currentUser: LoggedUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<LoggedUser | null>>;
  handleCreateUserWithEmailAndPassword: (userData: {
    login: string;
    email: string;
    password: string;
  }) => Promise<User>;
  handleSignInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  handleSignInWithGoogle: () => Promise<User>;
  handleSignOut: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

const addUserToFirestore = async ({
  id,
  login = "",
  email,
}: {
  id: string;
  login: string;
  email: string;
}) => {
  const userRef = doc(db, "Users", id);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    await setDoc(userRef, {
      id,
      login,
      email,
      chessboard: { darkSquare: "#607d8b", lightSquare: "#e0e0e0" },
    });
  } else {
    console.error("User already exists in Firestore");
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<LoggedUser | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [isEmailUser, setIsEmailUser] = useState<boolean>(false);
  const [isGoogleUser, setIsGoogleUser] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    return auth.signOut();
  };

  const defaultAvatarUrl = "src/assets/user-placeholder.jpg";

  const setDefaultAvatar = async (userId: string) => {
    // Pobranie instancji Firebase Storage
    const avatarRef = ref(storage, `avatars/${userId}/avatar.png`); // Tworzymy unikalny folder dla każdego użytkownika

    // Pobranie URL domyślnego avatara
    const placeholderImage = await getDownloadURL(
      ref(storage, defaultAvatarUrl)
    );

    // Pobranie danych obrazu, aby zapisać w Firebase Storage
    const response = await fetch(placeholderImage);
    const blob = await response.blob(); // Przekształcamy obrazek na obiekt Blob

    // Zapisujemy obrazek w Firebase Storage
    await uploadBytes(avatarRef, blob);

    // Teraz zapisujemy URL avatara w Firestore
    const avatarUrl = await getDownloadURL(avatarRef); // Uzyskujemy URL po załadowaniu

    // Zapisz URL avatara w Firestore
    await setDoc(doc(db, "Users", userId, "avatar", "avatarDoc"), {
      avatarURL: avatarUrl,
    });
  };

  const handleCreateUserWithEmailAndPassword = async ({
    login,
    email,
    password,
  }: {
    login: string;
    email: string;
    password: string;
  }) => {
    const ref = query(collection(db, "Users"), where("login", "==", login));
    const querySnapshot = await getDocs(ref);

    if (!querySnapshot.empty) {
      throw new Error("Login is already taken.");
    }
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await addUserToFirestore({ id: user.uid, login, email });

    await setDefaultAvatar(user.uid);

    return user;
  };

  const handleSignInWithEmailAndPassword = async (
    id: string,
    password: string
  ) => {
    const userData = { id, password };
    if (!id.includes("@")) {
      const ref = query(collection(db, "Users"), where("login", "==", id));
      const querySnapshot = await getDocs(ref);
      const dbUser = querySnapshot.docs[0]?.data();
      userData.id = dbUser.email;
    }
    return signInWithEmailAndPassword(auth, userData.id, userData.password);
  };

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userData = {
      id: user.uid,
      login: "",
      email: user.email || "",
    };

    await addUserToFirestore(userData);
    return user;
  };

  async function initializeUser(user: User | null) {
    if (user) {
      const userDocRef = doc(db, "Users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data() as LoggedUser;
        setCurrentUser({ ...userData, id: user.uid });
      } else {
        console.error("Nie znaleziono użytkownika w Firestore.");
        setCurrentUser(null);
      }
  
      setUserLoggedIn(true);
      setIsEmailUser(user.providerData.some(p => p.providerId === "password"));
      setIsGoogleUser(user.providerData.some(p => p.providerId === "google.com"));
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }
  

  const value: AuthContextType = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    setCurrentUser,
    handleCreateUserWithEmailAndPassword,
    handleSignInWithEmailAndPassword,
    handleSignInWithGoogle,
    handleSignOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
