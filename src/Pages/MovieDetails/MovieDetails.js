import React from "react";
import "./MovieDetails.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import movies from "../../content/movies";
const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((item) => id === item.id);
  console.log(movie);
  return (
    <Wrapper>
      <div className="movie-details-container">
        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <h2>
            Director <br /> {movie.director}
          </h2>
          <h3>
            Writers <br /> {movie.writers}
          </h3>
          <h4>
            Cast <br /> {movie.cast}
          </h4>
          <h5>
            Description <br /> {movie.description}
          </h5>
        </div>
        <div className="movie-pic">
          <img
            src={movie.images.movieImage}
            alt="movie-pic"
            className="movie-picture"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MovieDetails;
