import React, { useContext } from "react";

import { AuthContext } from "../context/auth-context";

import "./MainNavigation.css";

import { NavLink } from "react-router-dom";

import LogoutModal from "../modals/LogoutModal";

const MainNavigation = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="menu">
      <h1 className="logo">crushCar</h1>
      <ul className="navbar-ul">
        {!auth.isLoggedIn && (
          <li className="navbar-li">
            <NavLink to="/" exact className="navbar-li">
              Cars
            </NavLink>
          </li>
        )}

        {!auth.isLoggedIn && (
          <li className="navbar-li">
            <NavLink to="/login" exact className="navbar-li">
              Login
            </NavLink>
          </li>
        )}

        {!auth.isLoggedIn && (
          <li className="navbar-li">
            <NavLink to="/signup" exact className="navbar-li">
              Sign up
            </NavLink>
          </li>
        )}

        {auth.isLoggedIn && (
          <li className="navbar-li">
            <LogoutModal />
          </li>
        )}
      </ul>
    </div>
  );
};

export default MainNavigation;
