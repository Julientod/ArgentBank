import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import "../SignInForm/Form.scss";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/Login";
    navigate(path);
  };
  const signUp = (e) => {
    e.preventDefault();
    let body = { email, password, firstName, lastName, userName };
    signUpUser(body, dispatch);
    routeChange();
  };
  return (
    <div className="container-form">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1 className="form-title">Sign Up</h1>
      <form className="form" onSubmit={signUp}>
        <label className="label-bold" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          autoComplete="email"
        />
        <label className="label-bold" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
        />
        <label className="label-bold" htmlFor="firstName">
          Firstname
        </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name="firstName"
          id="firstName"
          autoComplete="given-name"
        />
        <label className="label-bold" htmlFor="lastName">
          Lastname
        </label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name="lastName"
          id="lastName"
          autoComplete="family-name"
        />
        <label className="label-bold" htmlFor="userName">
          Username
        </label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          name="userName"
          id="userName"
          autoComplete="username"
        />
        <button className="submit-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
