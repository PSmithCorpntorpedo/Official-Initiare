import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ title, researchfield, status, author, image, isBigCard }) => {
  return (
    <div className={`article-card ${isBigCard ? "big-card" : "small-card"}`}>
      <img src={image} alt={title} />
      {isBigCard && (
        <div className="card-content">
          <p>{title}</p>
        </div>
      )}
      {!isBigCard && (
        <div className="card-content-small">
          <span className="researchfield">{researchfield}</span>
          <span className="status">{status}</span>
          <p>{title}</p>
          <span className="author">{author}</span>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
