import React from "react";
import "./JournalCard.css";

const JournalCard = ({ title, image}) => {
  return (
    <div className="journalcard">
    <div className="journalcard-content">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
    <button type="button"><span>Learn more</span></button>
    </div>
  );
};

export default JournalCard;
