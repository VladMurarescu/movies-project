import React from "react";
import "./MovieCard.css";
import Img from "./film1.jpg";

const MovieCard = () => {
  return (
    <div className="movie-card-container">
      <div className="card-photo">
        <img src={Img} alt="card-img" className="card-img" />
      </div>
      <div className="card-info">
        <p className="card-title">titlul filmului</p>
        <p className="card-category">categorie</p>
        <button className="card-btn">Detalii</button>
      </div>
    </div>
  );
};

export default MovieCard;
