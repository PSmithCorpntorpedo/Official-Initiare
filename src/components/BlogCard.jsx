import React from "react";
import "./BlogCard.css";

const BlogCard = ({ date, description }) => {
  return (
    <div className="blogcard">
      <hr className="bloghr"/>
      <p className="blogdate">{date}</p>
      <p className="blogdes">{description}</p>
    </div>
  );
};

export default BlogCard;
