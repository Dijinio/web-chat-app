import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/auth";
import { ChatProvider } from "./context/chat";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
