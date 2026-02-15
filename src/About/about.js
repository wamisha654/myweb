import React from "react";
import "./about.css";
import img from "./pro.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-image">
          <img src={img} alt="Profile" />
        </div>

        <div className="about-content">
          <h2 className="section-title">About Me</h2>

          <p>
            My passion for technology started at a young age, but it truly took shape when I pursued a Bachelor of Science in Computer Science at the University of Łódź. During my studies, I gained hands-on experience with modern tools and technologies that drive innovation today, developing a strong foundation in problem-solving, coding, and system design. University was where curiosity transformed into technical skill, and I learned how to approach challenges analytically and creatively.
          </p>

          <p>
            While completing my degree, I began my professional journey at Fujitsu as an IT Service Desk Agent, resolving software, hardware, and network issues while providing excellent customer support. I then joined Capita as an IT Support Engineer, where I worked extensively with Azure AD, Active Directory, Intune, and Microsoft 365. In these roles, I strengthened my technical expertise, automated processes using Python and PowerShell, monitored systems, and collaborated with cross-functional teams to ensure operational stability. Most recently, I have been working as an Anti-Financial Crime Analyst at Sterling, applying my IT and data skills to maintain system integrity, investigate anomalies, and support compliance efforts.
          </p>

          <p>
            To continuously grow, I invest in learning and personal projects. I completed a comprehensive web development course on Udemy, which gave me an end-to-end understanding of web applications — from backend and databases to deployment and cloud infrastructure. I have also developed Python and SQL scripts for monitoring data pipelines and tracking endpoint compliance. I am passionate about solving complex problems, building efficient solutions, and exploring new challenges. I am always eager to contribute my skills to impactful projects while continuing to learn and innovate.
          </p>

         
        </div>

      </div>
    </section>
  );
};

export default About;
