import React, { Component } from "react";
import "./Movies.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Title from "../../components/Title/Title";
import MoviesList from "../../components/MoviesList/MoviesList";
class Movies extends Component {
  render() {
    return (
      <Wrapper>
        <div className="movies-top">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
        <Title title="Our movies" />
        <MoviesList />
      </Wrapper>
    );
  }
}

export default Movies;
