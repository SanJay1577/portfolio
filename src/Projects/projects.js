import React from "react";
import "./projects.css";
import project1 from "../Images/ecommerce.png";
import project2 from "../Images/web-scrapper.png";
import project3 from "../Images/color suggestion.png";
import project4 from "../Images/spider-movie-app.png";

const Projects = () => {
  return (
    <div className="project-page">
      <div className="project-content">
        <h1>Ecommerce</h1>
        <img src={project1} alt="project-name" />
        <div className="btn-group">
          <a
            href={"https://github.com/SanJay1577/ecommerce-frontend.git"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            Front-End Source code{" "}
          </a>

          <a
            href={"https://fitness-shop.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-site"
          >
            Live Site
          </a>
          <a
            href={"https://github.com/SanJay1577/ecommerce-backend.git"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            Back-End Source code
          </a>
          <a
            href={"https://ecap.herokuapp.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-site"
          >
            Server Url
          </a>
        </div>
      </div>
      <div className="project-content">
        <h1>Web-Scrapping</h1>
        <img src={project2} alt="project-name" />
        <div className="btn-group">
          <a
            href={"https://github.com/SanJay1577/web-scrapper-frontend.git"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            Front-End Source code
          </a>
          <a
            href={"https://web-scrapper.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-site"
          >
            Live Site
          </a>
          <a
            href={"https://github.com/SanJay1577/web-scrapper-backend.git"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            Back-End Source code
          </a>
          <a
            href={"https://webscrpe.herokuapp.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-site"
          >
            Server Url
          </a>
        </div>
      </div>
      <div className="project-content">
        <h1>Color sugesstion</h1>
        <img src={project3} alt="project-name" />
        <div className="btn-group">
          <a
            href={"https://github.com/SanJay1577/daily-color-frontend.git"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            Front-End Source code
          </a>
          <a
            href={"https://suggestcolor.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-site"
          >
            Live Site
          </a>
          <a
            href={"https://github.com/SanJay1577/daily-color-backend.git"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            Back-End Source code
          </a>
          <a
            href={"https://damp-forest-76809.herokuapp.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-site"
          >
            Server Url
          </a>
        </div>
      </div>
      <div className="project-content">
        <h1>Movie-Deatils</h1>
        <img src={project4} alt="project-name" />
        <div className="btn-group">
          <a
            href={"https://github.com/SanJay1577/imdb-app.git"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            Front-End Source code
          </a>
          <a
            href={"https://imdb-movie-app-react.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-site"
          >
            Live Site
          </a>
          <a
            href={"https://github.com/SanJay1577/movie-app-backend.git"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
          >
            Back-End Source code
          </a>
          <a
            href={"https://m-i.herokuapp.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-site"
          >
            Server Url
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
