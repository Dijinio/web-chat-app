import React, { useReducer, createContext, useEffect } from "react";
import authReducer from "./reducer";
import createActions from "./createActions";

const initialState = {
  errorMessage: "",
  user: { _id: "", email: "", name: "" },
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);

  const actions = createActions(dispatch);

  useEffect(() => {
    if (!auth.user.name) {
      const profile = localStorage.getItem("profile");

      profile && dispatch({ type: "SIGNED", payload: profile });
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, actions }}>
      {children}
    </AuthContext.Provider>
  );
};
