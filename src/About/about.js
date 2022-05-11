import React from "react";
import "./about.css";
import htmlImg from "../Images/HtmlAbout.png";
import cssIMg from "../Images/CSSAbout.png";
import javaScriptIcon from "../Images/javaScriptAbout.png";
import reactImg from "../Images/ReactAbout.png";
import mongoImg from "../Images/MongoAbout.png";
import nodeImg from "../Images/NoddAbout.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="left-side">
        <h1 className="animate__animated  animate__bounce  home-content">
          About Me
        </h1>
        <h2>
          Hi, I'm a Well-qualified Full Stack Developer familiar with a wide
          range of programming utilities and languages. Knowledgeable of backend
          and frontend development requirements with database management. Handles
          any part of the process with ease. Collaborative team player with a
          willingness to learn in and grow with the organization.
        </h2>
      </div>
      <div className="right-side">
        <div className="about-images">
          <img src={htmlImg} alt="html" />
          <img src={cssIMg} alt="css" />
          <img src={javaScriptIcon} alt="javascript" />
          <img src={reactImg} alt="react" />
          <img src={mongoImg} alt="mongodb" />
          <img src={nodeImg} alt="nodejs" />
        </div>
      </div>
    </div>
  );
};
export default About;
