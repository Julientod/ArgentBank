import React from "react";
import logo from "../../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { signOutUSer } from "../../redux/actions/userActions";

function Header() {
  const { token, user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };
  const signOut = () => {
    signOutUSer(dispatch);
    routeChange();
  };
  return (
    <header className="header">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo Argent Bank" />
      </Link>
      {token ? (
        <div className="nav">
          <div className="signin">
            <i className="fa fa-circle-user login-link--icon "></i>
            <Link className="login-link" to="/Profile">
              {user.userName}
            </Link>
          </div>
          <div className="signout">
            <i className="fa fa-sign-out signout-icon"></i>
            <button className="signout-button" onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="nav">
          <div>
            <i className="fa fa-circle-user signin-link--icon "></i>
          </div>
          <Link className="login-link" to="/Login">
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
