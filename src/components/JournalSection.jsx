import React from "react";
import ArticleCard from "./ArticleCard";
import image from "../assets/Image.png";

const JournalSection = () => {
  return (
    <div>
      <ArticleCard
        title="Small Article 1"
        description="This is a small article."
        image={image}
      />
      <ArticleCard
        title="Small Article 2"
        description="This is another small article."
        image={image}
      />
    </div>
  );
};

export default JournalSection;
