import React from "react";
import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";
import movies from "../../content/movies";
const MoviesList = () => {
  return (
    <div className="movies-list-container">
      {movies.map((movie) => {
        return (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            category={movie.category}
            images={movie.images}
            director={movie.director}
            writers={movie.writers}
            cast={movie.cast}
            description={movie.description}
          />
        );
      })}
    </div>
  );
};

export default MoviesList;
