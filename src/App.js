import React from 'react';
import logo from './logo.svg';
import Navigation from './Navigation/Navigation.js';
import Card from './Card/Card.js';
import About from './About/about.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Card />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
