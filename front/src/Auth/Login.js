import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../redux/Actions/Action";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const authSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input
            type="email"
            name="email"
            required
            onChange={onChangeHandler}
          />
          <label>User email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            required
            onChange={onChangeHandler}
          />
          <label>Password</label>
        </div>
        <button onClick={authSubmitHandler}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        <Link to="/signup">
          <p> Don't have an account? Register </p>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(Login);
