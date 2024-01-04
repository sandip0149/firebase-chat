import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currUser }}>{children}</AuthContext.Provider>
  );
};
