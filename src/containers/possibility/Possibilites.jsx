import React from "react";
import PossibilityImage from "../../assets/7-2-technology-picture.png";
import "./possibility.css";

const Possibilites = () => {
  return (
    <div
      className="possibility__section "
      id="possibility"
      style={{ color: "#fff" }}>
      <div className="possibilityImage__div">
        <img src={PossibilityImage} alt="possibility" />
      </div>
      <div className="possibility__right-section">
        <h4>request an early access to get started</h4>
        <h1 className="gradient-text">
          The Rise of ChatGPT-3: How OpenAI is Changing the Game in Natural
          Language Processing
        </h1>
        <p>
          One of the most impressive capabilities of ChatGPT-3 is its ability to
          understand and respond to a wide range of topics and contexts. This
          model can generate responses to questions on any topic, from technical
          subjects like computer science and mathematics to more general topics
          like current events and everyday life. It can also understand and
          respond to idiomatic expressions, sarcasm, and other nuances of human
          language.
        </p>
        <h4>request an early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibilites;
