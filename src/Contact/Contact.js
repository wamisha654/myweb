import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Contact.css'

const Contact = ()=>{
	return(
  <div className="contacts">
    <div className = "title">
     <h2>Contact</h2>
  	 <h1>Don't be shy! Hit me up!</h1>
    </div>
  	
  	<div className = "contact">
  		<section className = "contact-container">
  			<h1 className = "contact-logo"><AiOutlineMail /></h1>
  			<div className = "contact-text">
  			<h1>Mail</h1>
  			<p>wamikiya@gmail.com</p>
  			</div>
  			
  		</section>
      <section className = "contact-container">
        <a className = "contact-logo" href="https://github.com/wamisha654" target="_blank"><FaGithub /></a>
        <div className = "contact-text">
         <h1>Github</h1>
         <p>wamisha654</p>
        </div>
        
      </section>
  		<section className = "contact-container">
  			<h1 className = "contact-logo"><FaPhoneAlt /></h1>
  			<div className = "contact-text">
  			<h1>Phone</h1>
  			<p>+48 729246430</p>
  			</div>
  			
  		</section>
  		<section className = "contact-container">
  			<a className = "contact-logo" href="https://www.linkedin.com/in/wamisha-minamo-27a3351a3/" target="_blank"><FaLinkedin /></a>
  			<div className = "contact-text">
  			 <h1>Linkedin</h1>
         <p>Wamisha Minamo</p>
  			</div>
  			
  		</section>
  		
  	</div>
  </div>
		);
}

export default Contact;