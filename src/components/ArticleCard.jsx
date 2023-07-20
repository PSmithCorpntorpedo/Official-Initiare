import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ title, description, image, isBigCard }) => {
  return (
    <div className={`article-card ${isBigCard ? "big-card" : "small-card"}`}>
      <img src={image} alt={title} />
      {isBigCard && (
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
      {!isBigCard && (
        <div className="card-content-small">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
