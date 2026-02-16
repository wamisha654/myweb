import React from "react";
import "./Projects.css";
import img from "./myEcommerce.PNG";
import img1 from "./smartBrain.PNG";
import img2 from "./myWeather.PNG";
import img3 from "./Kiya.PNG";
import img4 from "./img4.jpg";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Portfolio</h2>
        <h1>Selected Projects</h1>
        <p>Each project demonstrates problem-solving, technical skills, and real-world implementation.</p>
      </div>

      <div className="projects-grid">
        {/* PROJECT 4 */}
        <div className="project-card">
          <img src={img4} alt="Data Pipeline Monitoring Project" />
          <div className="project-content">
            <h3>Data Pipeline Monitoring Script</h3>
            <p>
              A Python-based monitoring system for data pipelines. 
              It validates row counts, detects failed tasks, and identifies stale pipelines.
              Sends automated email alerts and logs all activity, demonstrating skills in automation,
              data engineering, and operational monitoring.
            </p>

            <div className="tech-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>PostgreSQL</span>
              <span>Automation</span>
            </div>

            <a
              href="https://github.com/wamisha654/pipeline-monitoring.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              GitHub Repo →
            </a>
          </div>
        </div>

        {/* PROJECT 1 */}
        <div className="project-card">
          <img src={img} alt="Bike Shop Project" />
          <div className="project-content">
            <h3>Bike Shop & Service Platform</h3>
            <p>
              A full-stack e-commerce platform where users can browse, purchase bikes, and book repair services.
              Built with a React frontend and Node.js backend, using MongoDB to store product, user, and order data.
              Implemented RESTful APIs and deployed on Heroku, emphasizing scalable architecture and modern web practices.
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Heroku</span>
            </div>

            <a
              href="https://marathon-livid.vercel.app/"
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
              A professional portfolio website for a movie writer and producer.
              Built with React and SCSS, it showcases creative work, integrates multimedia content, and provides a contact interface.
              Optimized for responsiveness and accessibility, highlighting design and frontend development skills.
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
              A real-time weather application that consumes external APIs to provide live forecasts worldwide.
              Users can search for any city and view current weather conditions. Demonstrates asynchronous API handling,
              dynamic UI updates, and responsive design using vanilla JavaScript, HTML, and CSS.
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
