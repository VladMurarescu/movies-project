import React from "react";
import "./MovieDetails.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Img from "./cinema2.jpg";
import Title from "../../components/Title/Title";
const MovieDetails = () => {
  return (
    <Wrapper>
      <div className="movie-details-container">
        <div className="movie-info">
          <h1 className="movie-title">Movie title</h1>
          <h2>
            Director <br /> lorem
          </h2>
          <h3>
            Writers <br /> Lorem, ipsum dolor.
          </h3>
          <h4>
            Carst <br /> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste ipsum, incidunt temporibus adipisci cum quia!
          </h4>
          <h5>
            Description <br /> Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsam ea maxime voluptatem? Laudantium quasi quae,
            provident veritatis dolorem expedita cumque commodi natus saepe
            animi. Nobis eaque eos ab suscipit, ullam libero expedita atque
            laborum assumenda? Ea, dignissimos. Quam officiis numquam nihil
            necessitatibus perspiciatis facere vero, dolorem voluptatem tenetur
            exercitationem, perferendis, consequatur iusto. Libero enim natus
            illo beatae, aperiam corrupti quibusdam voluptatibus? Dicta
            perspiciatis illum deleniti cum ab a repellendus quaerat dignissimos
            quam dolore recusandae sapiente nemo earum sed at nesciunt,
            doloremque culpa commodi animi deserunt aliquid. Quibusdam amet at,
            officia fugiat ab dicta eveniet sint labore, temporibus, autem
            corporis debitis.
          </h5>
        </div>
        <div className="movie-pic">
          <img src={Img} alt="movie-pic" className="movie-picture" />
        </div>
      </div>
    </Wrapper>
  );
};

export default MovieDetails;
