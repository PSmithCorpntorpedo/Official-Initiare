import React from 'react';
import ArticleCard from './ArticleCard';
import image from "../assets/Image.png";

const ArticleSection = () => {
  return (
    <div className="section-bigcontainer">
      <div>
      <ArticleCard
        title="Big Article"
        description="This is a big article."
        image={image}
        isBigCard
      />
      </div>
      <div className="section-smallcontainer">
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
        <ArticleCard
          title="Small Article 3"
          description="This is a third small article."
          image={image}
        />
        <ArticleCard
          title="Small Article 4"
          description="This is a small article."
          image={image}
        />
        <ArticleCard
          title="Small Article 5"
          description="This is another small article."
          image={image}
        />
        <ArticleCard
          title="Small Article 6"
          description="This is a third small article."
          image={image}
        />
      </div>
    </div>
  );
};

export default ArticleSection;