// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/">
        Your Logo
      </Link>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/details/EUR-USD">
              EUR-USD Details
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/details/EUR-GBP">
              EUR-GBP Details
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
