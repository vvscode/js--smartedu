import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectUserInfo } from "../rdx/user";

const Header = (props) => (
  <header className="container mt-3">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        SmartEdu
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Все курсы
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/contact_us">
              Contact us
            </Link>
          </li>
          {!props.userInfo
            ? [
                <li className="nav-item" key="register">
                  <Link className="nav-link" to="/ajax-register/">
                    Register
                  </Link>
                </li>,
                <li className="nav-item" key="login">
                  <Link className="nav-link" to="/accounts/login/">
                    Login
                  </Link>
                </li>,
              ]
            : [
                <li className="nav-item" key="profile">
                  <Link className="nav-link" to="/profile">
                    {props.userInfo?.name}
                  </Link>
                </li>,
                <li className="nav-item" key="logout">
                  <a className="nav-link" href="/logout">
                    Logout
                  </a>
                </li>,
              ]}
        </ul>
      </div>
    </nav>
  </header>
);

export default connect((state) => ({ userInfo: selectUserInfo(state) }))(
  Header
);
