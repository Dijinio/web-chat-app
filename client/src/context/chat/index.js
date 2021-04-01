import React, { useReducer, createContext } from "react";
import chatReducer from "./reducer";
import createActions from "./createActions";

const initialState = {
  _id: "",
  users: [{ _id: "", name: "" }],
  name: "",
  messages: [{ id: "", body: "", createdAt: "", user: "" }],
};

export const ChatContext = createContext(initialState);

export const ChatProvider = ({ children }) => {
  const [chatRoom, dispatch] = useReducer(chatReducer, initialState);

  const actions = createActions(dispatch);

  return (
    <ChatContext.Provider value={{ chatRoom, actions }}>
      {children}
    </ChatContext.Provider>
  );
};
