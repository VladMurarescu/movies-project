import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./AboutUs.css";
import Title from "../../components/Title/Title";
const AboutUs = () => {
  return (
    <Wrapper>
      <Title title="More about us and our purpose" />
      <div className="about-us-container">
        <p>
          <h2>Our work</h2> <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
          laborum non consequatur esse dicta ratione libero reprehenderit a fuga
          natus in necessitatibus provident, laboriosam eius! Quasi deleniti
          dolorum iusto. Quasi dolor impedit fuga officiis, error consectetur
          inventore architecto recusandae alias nesciunt a magnam magni vitae
          dolores beatae voluptatem nemo? Doloremque obcaecati blanditiis vel
          illum totam mollitia labore similique impedit voluptatibus amet fuga,
          est natus doloribus.
        </p>
        <div className="photo-container">
          <div className="photo"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
