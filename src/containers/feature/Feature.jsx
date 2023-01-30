import React from "react";
import { FeatureData } from "./ElementsContainer";
import "./feature.css";
function Features() {
  return (
    <div className="text__div" id="feature">
      <div className="title2 gradient-text">
        <h2>Exploring the Capabilities of OpenAI's ChatGPT-3 Language Model</h2>
      </div>
      <div className="text_title-parent">
        {FeatureData &&
          FeatureData.length > 0 &&
          FeatureData.map((item) => (
            <div className="text_title">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Features;
