import React from "react";
import "./Home.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import HomeTop from "../../components/HomeTop/HomeTop";
import HomeInfo from "../../components/HomeInfo/HomeInfo";
const Home = () => {
  return (
    <Wrapper>
      <HomeTop />
      <HomeInfo />
    </Wrapper>
  );
};

export default Home;
