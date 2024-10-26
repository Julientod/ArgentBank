import React, { useState } from "react";
import "./Form.scss";

import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };
  const signIn = (e) => {
    e.preventDefault();
    let body = { email, password };
    signInUser(isChecked, body, routeChange, dispatch);
  };

  return (
    <div className="container-form">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1 className="form-title">Sign In</h1>
      <form className="form" onSubmit={signIn}>
        <label className="label-bold" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
        />
        <label className="label-bold" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
        />

        <div className="check">
          <input
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
            type="checkbox"
            name="remember"
            id="remember"
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="submit-button" type="submit">
          Sign In
        </button>
      </form>
      <p>You don't have an account?</p>
      <Link className="signup-link" to={"/SignUp"}>
        Sign Up
      </Link>
    </div>
  );
};

export default SignInForm;
