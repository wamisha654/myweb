import React, {useState} from 'react';
import './Navigation.css';
import Sidebar from '../Sidebar/Sidebar';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from "react-icons/fa";
const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div className="nav-bar">
      <ScrollLink to="card-main" spy={true} smooth={true} offset={50} duration={500} className="nav-start">Wamisha</ScrollLink>
      <div className = "bars">
        <div style={{ color: 'inherit' }}>
          <FaBars onClick = {showSidebar} />
        </div>
        <nav className = {sidebar? 'second-nav-menu active' : 'second-nav-menu'}>
          <Sidebar showSidebar={showSidebar}/>
        </nav>
      </div>
      <nav className="nav-menus">
        <ScrollLink to="card-main" spy={true} smooth={true} offset={0} duration={500} activeClass="active">Home</ScrollLink>
        <ScrollLink to="about" spy={true} smooth={true} offset={0} duration={500} activeClass="active">About</ScrollLink>
        <ScrollLink to="project" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">Project</ScrollLink>
        <ScrollLink to="contacts" spy={true} smooth={true} offset={0} duration={500} activeClass="active">Contact</ScrollLink>
      </nav>
      
    </div>
  );
}

export default Navigation;
