import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase.ts";
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

interface AuthContextType {
  userLoggedIn: boolean;
  isEmailUser: boolean;
  isGoogleUser: boolean;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
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
    await setDoc(userRef, { id, login, email });
  } else {
    console.error("User already exists in Firestore");
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
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
      setCurrentUser({ ...user });

      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);

      const isGoogle = user.providerData.some(
        (provider) => provider.providerId === "google.com"
      );
      setIsGoogleUser(isGoogle);

      setUserLoggedIn(true);
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
