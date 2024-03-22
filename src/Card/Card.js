import React from 'react';
import './Card.css'
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import img from './reactLogo.png';
import img2 from './htmlLogo.png';
import img3 from './cssLogo.png';
import img4 from './jsLogo.png';
import cv from './Wamisha CV.pdf';
import certificate from './myCertificate.pdf';


const Card = () =>{
	return(
		<div className="card-main">
			<div className = "card-box">
			
               <div className = "font-text">
            	<h3>Front-End developer</h3>
			    <p> Hi i am Wamisha Minamo. A passionate front end <br /> developer based in poland <GrLocation /></p>
			    <div className="olusha">
			    	<a href = {cv} download = {cv}>
                	<button className = "my-butt">My CV</button>
                </a>
                <a href = {certificate} download = {certificate}>
                	<button className = "my-butt">Certificate</button>
                </a>
			    </div>
                
                
            
              </div>
            <div className = "profile-pic">
            
            <div className = "profile-pic-background"></div>
		    </div>
		    
		    
			</div>
			<div>
				<div className = "tech-stack">
			        <h4 className = "tech-font">Tech stack</h4>
			        <div className="tech-images">
			        	<img src={img} />
			    	    <img src={img2} />
			    	    <img src={img3} />
			    	    <img src={img4} />
			        </div>
			    	
			    	
			</div>
			</div>
			
		  </div>
		
		
		);
}

export default Card;