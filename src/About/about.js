import React, { useState } from "react";
import "./about.css";
import profile from "./about.jpg";

// Certificates (PDFs or images)
import cert1 from "./cert1.pdf";
import cert2 from "./cert2.pdf";
import cert3 from "./cert3.pdf";
import cert4 from "./cert4.pdf";

const certificates = [
  { id: 1, title: "Diploma", file: cert1, thumbnail: cert1 },
  { id: 2, title: "Networking Essentials", file: cert4, thumbnail: cert4 },
  { id: 3, title: "AWS Cloud Practitioner Essentials", file: cert3, thumbnail: cert3 },
  { id: 4, title: "Complete Web Developer", file: cert2, thumbnail: cert2 },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="about-section" id="about-section">
      <div className="about-container">
        {/* LEFT: Image */}
        <div className="about-image">
          <img src={profile} alt="Wamisha Minamo" />
        </div>

        {/* RIGHT: Text */}
        <div className="about-text">
          <h2>About Me</h2>
          
          {/* Paragraph 1: passion + education */}
          <p>
            My passion for technology started at a young age, but it truly took shape when I pursued a Bachelor of Science in Computer Science at the University of Łódź. 
            During my studies, I gained hands-on experience with modern tools and technologies, developing a strong foundation in problem-solving, coding, and system design.
          </p>

          {/* Paragraph 2: professional journey */}
          <p>
            Over the years, I’ve built a career supporting people and systems, from helping users solve technical problems to ensuring that complex workflows run smoothly behind the scenes. 
            I enjoy understanding how things work, identifying issues before they become problems, and creating solutions that make work easier for everyone involved.
          </p>

          {/* Paragraph 3: collaboration and problem-solving */}
          <p>
            Working closely with teams across IT, data, and product, I’ve learned that communication is just as important as technical skill. 
            I take pride in bridging gaps between people and technology, making sure information flows clearly, and helping teams stay aligned while delivering results.
          </p>

          {/* Paragraph 4: current role + projects */}
          <p>
            In my current role, I monitor and maintain critical systems, investigate irregularities, and support operational stability. 
            I’ve also developed projects like a data pipeline monitoring script that alerts teams to potential issues—combining curiosity, creativity, and practical problem-solving to keep operations running smoothly.
          </p>

          {/* Paragraph 5: closing statement */}
          <p>
            I’m motivated by challenges that require both thinking and action, and I enjoy creating solutions that help people and organizations succeed. 
            Every day, I strive to learn, adapt, and make a tangible impact in the work I do.
          </p>
        </div>
      </div>

      {/* CERTIFICATES GALLERY */}
      <div className="certificates-section">
        <h2>Certificates</h2>
        <p>Click to view & download my professional certificates.</p>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="certificate-overlay">View & Download</div>
              <div className="certificate-title">{cert.title}</div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="modal">
            <div className="modal-content">
              <h3>{selectedCert.title}</h3>
              <iframe
                src={selectedCert.file}
                title={selectedCert.title}
                width="100%"
                height="400px"
              ></iframe>
              <div className="modal-buttons">
                <a href={selectedCert.file} download>
                  <button>Download</button>
                </a>
                <button onClick={() => setSelectedCert(null)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
