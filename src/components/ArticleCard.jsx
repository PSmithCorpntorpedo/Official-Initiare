import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ title, researchfield, status, author, image, isBigCard }) => {
  return (
    <div className={`article-card ${isBigCard ? "big-card" : "small-card"}`}>
      {isBigCard && (
        <div className="bigcard-container">
        <div className="card-content">
          <span className="researchfield">{researchfield}</span>
          <p>{title}</p>
          <span className="author">{author}</span>
          <span className="status">{status}</span>
        </div>
        </div>
      )}
      {!isBigCard && (
        <div>
        <img src={image} alt={title} />
        <div className="card-content-small">
          <span className="researchfield">{researchfield}</span>
          <span className="status">{status}</span>
          <p>{title}</p>
          <span className="author">{author}</span>
        </div>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
