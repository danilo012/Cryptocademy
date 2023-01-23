import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";

import { auth } from "../Utils/init-firebase";

// create a context with a placeholder value initially
const AuthContext = createContext();

// custom hook
export const useAuth = () => useContext(AuthContext);

// Provider that wraps our app.js
export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function deleteUser(user) {
    return deleteUser(user);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: "https://cryptocademy.netlify.app/"
    });
  }

  function updateProfileName(username) {
    return updateProfile(auth.currentUser, {
      displayName: username
    });
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    updateProfileName,
    deleteUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
