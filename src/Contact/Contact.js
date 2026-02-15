import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact</h2>
        <h1>Let’s Work Together 🚀</h1>
        <p>Feel free to reach out anytime.</p>
      </div>

      <div className="contact-grid">

        <a
          href="mailto:wamikiya@gmail.com"
          className="contact-card"
        >
          <AiOutlineMail className="icon" />
          <div>
            <h3>Email</h3>
            <p>wamikiya@gmail.com</p>
          </div>
        </a>

        <a
          href="tel:+48729246430"
          className="contact-card"
        >
          <FaPhoneAlt className="icon" />
          <div>
            <h3>Phone</h3>
            <p>+48 729 246 430</p>
          </div>
        </a>

        <a
          href="https://github.com/wamisha654"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="icon" />
          <div>
            <h3>GitHub</h3>
            <p>wamisha654</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/wamisha-minamo-27a3351a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="icon" />
          <div>
            <h3>LinkedIn</h3>
            <p>Wamisha Minamo</p>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Contact;
