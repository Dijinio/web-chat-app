import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Auth} />
        <Route exact path="/chatRooms/:name" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
