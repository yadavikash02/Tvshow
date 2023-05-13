import React from "react";
import { Link } from "react-router-dom";

function Header({ title,mode ,toggle}) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${mode==="dark"?"secondary":"light"} navbar-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={toggle}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${mode==='dark'?'light':'dark'}`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {mode==='dark'?'Light':'Dark'}mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
