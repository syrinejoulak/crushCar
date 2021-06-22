import "./App.css";

import React, {  useEffect, useRef } from "react";

import { useSelector } from "react-redux";

import MainNavigation from "./shared/navigation/MainNavigation";
import Home from "./Home/Home";
import Login from "./Auth/Login";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignUp from "./Auth/SignUp";

import { AuthContext } from "./shared/context/auth-context";

import LogoutModal from "./shared/modals/LogoutModal";

function App() {
  let token = useSelector((state) => state.token);
  let userId = useSelector((state) => state.userId);

  const tokenRef = useRef(token);




  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      tokenRef.current = storedData.token;
    }
  }, []);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/logout" exact>
          <LogoutModal />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/signup" exact>
          <SignUp />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
    
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
