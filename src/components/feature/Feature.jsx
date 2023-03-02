import React from "react";
import "./feature.css";
const Feature = ({ title, text }) => {
  return (
    <>
      <div className="gpt3__features__container-feature">
        <h1 className="gpt__what-gpt3-d-title  gradient-text">{title}</h1>
        <div className="whatgpt3__feature-text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
export default Feature;
