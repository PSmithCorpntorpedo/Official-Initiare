import React from "react";
import videoBg from "../assets/blurred_bokeh_video (720p).mp4";
import arrow from "../assets/Arrow.svg";
import "./Homepage.css";

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
      </div>
    </div>
  );
};
export default Homepage;
