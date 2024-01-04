import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";
export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currUser } = useContext(AuthContext);

  const Initial_state = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currUser.uid > action.payload.uid
              ? currUser.uid + action.payload.uid
              : action.payload.uid + currUser.uid,
        };
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(chatReducer, Initial_state);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
