import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div className="movie-card-container">
      <div className="card-photo">
        <img src={props.images.cardImage} alt="card-img" className="card-img" />
      </div>
      <div className="card-info">
        <p className="card-title">{props.title}</p>
        <p className="card-category">{props.category}</p>
        <Link to={`/movies/${props.id}`} className="card-btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
