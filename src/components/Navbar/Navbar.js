import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Muri's Movies</h1>
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className="a">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="a">
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
