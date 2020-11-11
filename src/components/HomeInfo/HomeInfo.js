import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import Title from "../Title/Title";
import "./HomeInfo.css";
const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <Title title="People's reviews" />
      <div className="container">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default HomeInfo;
