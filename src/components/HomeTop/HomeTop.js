import React from "react";
import { Link } from "react-router-dom";
import "./HomeTop.css";
const HomeTop = () => {
  return (
    <div className="home-top-container">
      <h1 className="home-title">Lorem ipsum dolor sit amet consectetur.</h1>
      <Link to="/movies" className="home-button">
        Movies
      </Link>
    </div>
  );
};

export default HomeTop;
