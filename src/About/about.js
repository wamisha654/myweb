import React from 'react';
import './about.css'
import img from './pro.jpg'
const About = () =>{
	return(
		<div className = "about">
		
		 <div className = "about-main">
		 	
			<div className = "about-container">
			   <img src={img} className="about-img" width = "500" height = "500"/>
			   <p><h3 className = "title-div">ABOUT ME</h3> I am a front-end developer with a comprehensive understanding of end-to-end web development. My journey began with a solid educational background in computer science, completed by additional certifications from Udemy in web development. <br /><br /> Throughout my web development journey, I had the opportunity to work as a front-end developer and contribute to professional projects. I also pursued personal projects alongside my learning process and after completing the course, further enriching my experience. <br /><br />I am passionate for innovation, thrive on challenges and am eager to contribute to impactful projects. 
With a firm belief in continuous learning and growth, I am confident that I can be a valuable asset to your company.
  </p>
			</div>
		 </div>
			
			
		</div>
		
		);
}
export default About;