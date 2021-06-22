import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { signUp } from "../redux/Actions/Action";
import { Redirect } from "react-router-dom";

import "./Login.css";

const SignUp = () => {
  let isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const signUpHandler = (e) => {
    e.preventDefault();

    dispatch(signUp(form));
    // props.history.push("/");
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="login-box">
      <h2>Sign up</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={onChangeHandler}
          />
          <label>User name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            id="name"
            required
            onChange={onChangeHandler}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={onChangeHandler}
          />
          <label>Password</label>
        </div>
        <button onClick={signUpHandler}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        <p>
          Already have an account?{" "}
          <Link to="./login" className="login-link">
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
