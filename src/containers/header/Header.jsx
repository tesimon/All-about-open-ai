import React from "react";
import Ai from "../../assets/32540-4-technology-hd.png";
import People from "../../assets/people.png";
import "./header.css";
const Header = () => {
  return (
    <div className="flex" id="header">
      <div className="gpt3__header">
        <div className="gpt3__header__section">
          <h1 className="gradient-text">
            A Breakthrough in Language Generation by OpenAI
          </h1>
          <p>
            the latest and most advanced language generation model developed by
            OpenAI. The future of language processing and AI
          </p>
          <div className="gpt3__header-input">
            <input
              type="text"
              placeholder="Enter your E
          mail Adress"
            />
            <button type="button" className="gpt3__header-btn">
              Get Started
            </button>
          </div>
          <div className="people-img">
            <img src={People} alt="people" />
            <span>3m+ users has already applied for gpt3</span>
          </div>
        </div>
      </div>
      <div className="ai__picture">
        <img src={Ai} alt="ai" />
      </div>
    </div>
  );
};
export default Header;
