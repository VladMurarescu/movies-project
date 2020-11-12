import React from "react";
import "./ReviewCard.css";
const ReviewCard = (props) => {
  return (
    <div className="box">
      <i className="fas fa-quote-left quote"></i>
      <p>{props.content}</p>
      <p>- {props.name}</p>
    </div>
  );
};

export default ReviewCard;
