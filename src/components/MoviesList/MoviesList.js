import React from "react";
import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";
const MoviesList = () => {
  return (
    <div className="movies-list-container">
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default MoviesList;
