import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <div className="error">
      <h1 className="error--title">404</h1>
      <p className="error--text">This page doesn't exist!</p>
      <Link className="error--link" to={"/"}>
        Get back to Home page
      </Link>
    </div>
  );
}

export default ErrorPage;
