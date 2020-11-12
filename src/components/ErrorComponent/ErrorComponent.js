import React from "react";
import "./ErrorComponent.css";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
const ErrorComponent = () => {
  return (
    <Wrapper>
      <div className="error-container">
        <Title title="Page not found" />
        <Link to="/" className="error-btn">
          Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default ErrorComponent;
