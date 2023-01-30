import React from "react";
import Feature from "../../components/feature/Feature";

import "./whatgpt3.css";
const Whatgpt3 = () => {
  return (
    <div>
      <div className="gpt3__whatgpt3 " id="what_gpt3">
        <div className="border-line"></div>
        <div className="gpt3__whatgpt3-feature">
          <h1>What is gpt3</h1>
          <p>
            ChatGPT-3 is the latest and most advanced language generation model
            developed by OpenAI, one of the leading research organizations in
            the field of artificial intelligence
          </p>
        </div>

        <div className="gpt3__headers">
          <h1 className="gradient-text">
            ChatGPT-3: The Future of Artificial Intelligence in Human-Like
            Communication
          </h1>
          <p>Explore The Library</p>
        </div>

        <div className="gpt3__whatgpt3-container">
          <Feature
            title="Chatbots"
            text=" Dicta eos
            velit odit exercitationem eius illum repudiandae voluptate, ipsam
            "
          />
          <Feature
            title="knowledgebase"
            text="Dicta eos
            velit odit exercitationem eius illum repudiandae voluptate, ipsam
            "
          />
          <Feature
            title="Education"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta eos"
          />
        </div>
      </div>
    </div>
  );
};
export default Whatgpt3;
