import React from 'react';
import './Sidebar.css'
import { Link as ScrollLink } from 'react-scroll';
import { MdClose } from "react-icons/md";


const Sidebar = ({showSidebar}) =>{
	return(
     <div >
        <div className = "close-tag">
        	<MdClose className = "tag-close" onClick = {showSidebar}/>
        </div>
     	
     	<div className = "sidebar-menu">
     		<ScrollLink className = "menus" onClick = {showSidebar} to="card-main" spy={true} smooth={true} offset={0} duration={500} activeClass="active">Home</ScrollLink>
            <ScrollLink className = "menus" onClick = {showSidebar} to="about" spy={true} smooth={true} offset={0} duration={500} activeClass="active">About</ScrollLink>
            <ScrollLink className = "menus" onClick = {showSidebar} to="project" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">Project</ScrollLink>
            <ScrollLink className = "menus" onClick = {showSidebar} to="contacts" spy={true} smooth={true} offset={0} duration={500} activeClass="active">Contact</ScrollLink>
      
     	</div>
        
     </div>
		)
}
export default Sidebar;