import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
const Blogs = () => {
  return (
    <div className="gpt3__blog-section" id="blogs">
      <div className="gpt3__header ">
        <h1 className="gradient-text">
          The Possibilities are beyoned your imaginations
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-group1">
          <Article
            imgUrl={blog01}
            date={"jan 01 2023"}
            title={`Exploring the Capabilities of OpenAI's ChatGPT-3 Language Model`}
          />
        </div>
        <div className="gpt3__blog-group2">
          <Article
            imgUrl={blog02}
            date={"jan 02 2023"}
            title={`ChatGPT-3: The Future of Artificial Intelligence in Human-Like
            Communication`}
          />
          <Article
            imgUrl={blog03}
            date={"jan 03 2023"}
            title={` Exploring the Capabilities of ChatGPT-3: A Breakthrough in Language
            Generation by OpenAI`}
          />
          <Article
            imgUrl={blog04}
            date={"jan 04 2023"}
            title={`a potential
            implications for the future of language processing and AI`}
          />
          <Article
            imgUrl={blog05}
            date={"jan 05 2023"}
            title={`open is the future, what is open ai ? let's explore`}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
