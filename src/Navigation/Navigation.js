import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">

        <ScrollLink
          to="hero-section"
          smooth={true}
          duration={500}
          className="logo"
        >
          Wamisha
        </ScrollLink>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <ScrollLink to="hero-section" smooth duration={500} activeClass="active" spy>
            Home
          </ScrollLink>
          <ScrollLink to="about-section" smooth duration={500} activeClass="active" spy>
            About
          </ScrollLink>
          <ScrollLink to="projects-section" smooth duration={500} activeClass="active" spy>
            Projects
          </ScrollLink>
          <ScrollLink to="contact-section" smooth duration={500} activeClass="active" spy>
            Contact
          </ScrollLink>
        </nav>

        {/* Mobile */}
        <div className="menu-icon">
          <FaBars onClick={showSidebar} />
        </div>

        <nav className={sidebar ? "mobile-menu active" : "mobile-menu"}>
          <Sidebar showSidebar={showSidebar} />
        </nav>

      </div>
    </header>
  );
};

export default Navigation;
