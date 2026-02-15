import React from "react";
import "./Projects.css";
import img from "./myEcommerce.PNG";
import img1 from "./smartBrain.PNG";
import img2 from "./myWeather.PNG";
import img3 from "./Kiya.PNG";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Portfolio</h2>
        <h1>Selected Projects</h1>
        <p>Each project represents growth, problem-solving, and real-world implementation.</p>
      </div>

      <div className="projects-grid">

        {/* PROJECT 1 */}
        <div className="project-card">
          <img src={img} alt="Bike Shop Project" />
          <div className="project-content">
            <h3>Bike Shop & Service Platform</h3>
            <p>
              An online bike shop where users can purchase bikes and book repair services.
              Built with a scalable structure and modern UI practices.
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>SCSS</span>
              <span>Node.js</span>
              <span>Heroku</span>
            </div>

            <a
              href="https://my-bike.vercel.app/store"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Live Demo →
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <img src={img3} alt="Portfolio Website" />
          <div className="project-content">
            <h3>Creative Portfolio Website</h3>
            <p>
              A professional portfolio website for a movie writer and producer,
              designed to showcase creative work and connect with audiences.
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>SCSS</span>
              <span>JavaScript</span>
              <span>HTML</span>
            </div>

            <a
              href="https://semagngeta.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Live Demo →
            </a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <img src={img2} alt="Weather App" />
          <div className="project-content">
            <h3>Weather Application</h3>
            <p>
              A real-time weather application using external APIs to provide
              accurate forecasts and live data worldwide.
            </p>

            <div className="tech-tags">
              <span>JavaScript</span>
              <span>CSS</span>
              <span>API</span>
              <span>HTML</span>
            </div>

            <a
              href="https://wamisha654.github.io/Weather/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Live Demo →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
