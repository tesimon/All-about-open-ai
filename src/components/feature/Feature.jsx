import React from "react";
import "./feature.css";
const Feature = ({ title, text }) => {
  return (
    <>
      <div className="gpt3__features__container-feature">
        <h1 className="hello">{title}</h1>
        <div className="whatgpt3__feature-text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
export default Feature;
