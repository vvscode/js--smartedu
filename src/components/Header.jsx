import React from "react";

const Header = () => (
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
            <a className="nav-link" href="/">
              Все курсы
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/contact_us">
              Contact us
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link" href="/ajax-register/">
              Register
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/accounts/login/">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
