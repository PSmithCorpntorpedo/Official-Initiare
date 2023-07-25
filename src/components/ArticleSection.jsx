import React from "react";
import ArticleCard from "./ArticleCard";
import image from "../assets/Image.png";

const ArticleSection = () => {
  return (
    <div className="section-bigcontainer">
      <div>
        <ArticleCard
          title="Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim"
          image={image}
          isBigCard
        />
      </div>
      <div className="section-smallcontainer">
        <ArticleCard
          title="Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim"
          researchfield="Research field"
          status="non-reviewed"
          author="Author Author Author"
          image={image}
        />
        <ArticleCard
          title="Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim"
          researchfield="Research field"
          status="non-reviewed"
          author="Author Author Author"

          image={image}
        />
        <ArticleCard
          title="Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim"
          researchfield="Research field"
          status="non-reviewed"
          author="Author Author Author"
          image={image}
        />
        <ArticleCard
          title="Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim"
          researchfield="Research field"
          status="non-reviewed"
          author="Author Author Author"
          image={image}
        />
        <ArticleCard
          title="Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim"
          researchfield="Research field"
          status="non-reviewed"
          author="Author Author Author"
          image={image}
        />
        <ArticleCard
          title="Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim"
          researchfield="Research field"
          status="non-reviewed"
          author="Author Author Author"
          image={image}
        />
      </div>
    </div>
  );
};

export default ArticleSection;
