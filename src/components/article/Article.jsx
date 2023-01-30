import React from "react";
import "./article.css";

const Article = ({ imgUrl, title, date }) => {
  return (
    <div className="gpt3__blog-container-article">
      <div className="gpt3__blog-image">
        <img src={imgUrl} alt="blog images" />
      </div>
      <div className="gpt3__container-blog-content">
        <div>
          <p>{date}</p>
          <h3 className="text__gradient">{title}</h3>
        </div>
        <p>Read more...</p>
      </div>
    </div>
  );
};

export default Article;
