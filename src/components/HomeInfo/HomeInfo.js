import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import Title from "../Title/Title";
import "./HomeInfo.css";
import reviews from "../../content/reviews";
const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <Title title="People's reviews" />
      <div className="container">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.id}
              name={review.name}
              content={review.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeInfo;
