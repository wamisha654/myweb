import React from "react";
import "./Card.css";
import { GrLocation } from "react-icons/gr";
import profile from "./img.jpg";
import cv from "./Wamisha CV.pdf";
import certificate from "./myCertificate.pdf";

const Card = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Wamisha Minamo</span>
          </h1>

          <h2 className="hero-role">
            Technical Support Engineer
          </h2>

          <p className="hero-description">
            Passionate Technical Support Engineer based in Poland <GrLocation className="location-icon" />.
            I specialize in troubleshooting, system support, and building efficient technical solutions.
          </p>

          <div className="hero-buttons">
            <a href={cv} download>
              <button className="primary-btn">Download CV</button>
            </a>

            <a href={certificate} download>
              <button className="secondary-btn">Certificate</button>
            </a>
          </div>

          <div className="tech-stack">
            <h4>Tech Stack</h4>
            <div className="tech-badges">
              <span>ITSM</span>
              <span>Python</span>
              <span>SQL</span>
              <span>PowerShell</span>
              <span>AWS</span>
              <span>Azure</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">
          <img src={profile} alt="Wamisha Minamo" />
        </div>

      </div>
    </section>
  );
};

export default Card;
