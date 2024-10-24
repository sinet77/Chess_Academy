import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

import {
  onAuthStateChanged,
  User,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
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
  doCreateUserWithEmailAndPassword: (userData: any) => Promise<User>;
  doSignInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  doSignInWithGoogle: () => Promise<User>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

const addUserToFirestore = async ({id, login='', email}: {id: string, login: string, email: string}) => {
  try {
    await setDoc(doc(db, "Users", id), {id, login, email});
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
  }
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password: string) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

export const doCreateUserWithEmailAndPassword = async (
    {login, email, password}: { login: string, email: string; password: string }
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await addUserToFirestore({id: user.uid, login, email});
};

export const doSignInWithEmailAndPassword = async(id:string, password:string) => {
  const userData = { id, password };

  if (!id.includes('@')) {
    const ref = query(collection(db, 'Users'), where('login', '==', id));
    const querySnapshot = await getDocs(ref);
    const dbUser = querySnapshot.docs[0]?.data();
    userData.id = dbUser.email;
  } 

  return signInWithEmailAndPassword(auth, userData.id, userData.password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // await addUserToFirestore(user);
  return user;
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
    doCreateUserWithEmailAndPassword,
    doSignInWithEmailAndPassword,
    doSignInWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
