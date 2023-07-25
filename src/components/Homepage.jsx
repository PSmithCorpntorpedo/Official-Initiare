import React from "react";
import videoBg from "../assets/blurred_bokeh_video (720p).mp4";
import arrow from "../assets/Arrow.svg";
import ArticleSection from "./ArticleSection";
import "./Homepage.css";
import JournalSection from "./JournalSection";
import BlogSection from "./BlogSection";

const Homepage = () => {
  return (
    <div>
      <div className="intro">
        <video className="video-background" autoPlay loop>
          <source src={videoBg} type="video/mp4" />
        </video>
        <p className="h-sm">Welcome to</p>
        <p className="h-big">INITIARE</p>
        <p className="h-sm">An open journal for student</p>
        <p className="word">Learn more</p>
        <img className="arrow" src={arrow} alt="Learn more" />
        <h1 className="h1-intro">OUR GOALS</h1>
        <hr />
        <p className="content">
          The objective of our team is clear! Here at InitiaRe, we aim to
          establish an accessible and dynamic platform that empowers students by
          promoting professional research and facilitating the exchange of
          research papers. This open journal caters not only to those looking to
          publish their work but also provides inspiration for researchers
          seeking fresh ideas or reliable sources of information.
        </p>
      </div>
      <div className="articles">
        <h1 className="h1-articles">
          <span className="yellow">REVIEWED</span>
          <span className="blue">ARTICLES</span>
        </h1>
        <hr />
        <ArticleSection />
      </div>
      <div className="scholar1">
        <h1 className="h1-scholar1">
          <span className="blue">I</span>
          <span className="yellow2">RScholar</span>
          <span className="black">Journal</span>
        </h1>
        <hr />
        <div className="scholarcontainer1">
          <div className="scholarsubcontainer">
            <h2 className="h2-scholar">OUR PARTNERSHIP</h2>
            <p className="scholarcontent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <JournalSection />
        </div>
        <h2 className="h2-scholar1-blog1">Recently uploaded</h2>
      </div>
      <div className="blog1">
        <h1 className="h1-blog1">BLOG</h1>
        <hr />
        <h2 className="h2-scholar1-blog1">Recent updates</h2>
        <div className="blogsection">
          <BlogSection />
        </div>
        <footer className="footer-container"></footer>
      </div>
    </div>
  );
};
export default Homepage;
