import React from "react";
import "./Title.css";
const Title = (props) => {
  return (
    <div className="section-title">
      <h4>{props.title}</h4>
      <div />
    </div>
  );
};

export default Title;
