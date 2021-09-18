import React from "react";
// Components
import LandingPage from "./LandingPage";
import About from "./About";
import Languages from "./Languages";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
// Style
import "../styles/Programmer.css";

const Programmer = () => {
  return (
    <div className="programmer">
      {/* Landing Page */}
      <LandingPage img_url="https://raw.githubusercontent.com/Ruchiket100/RuchiketWorld/4aac135af069834358db7b7e32212141da323e07/Images/programmer.svg" />
      {/* ----------------  About Us ---------------- */}
      <About
        about="I am Ruchiket, currently I am persuing 12th. 
        Coding and Drawing are my main hobbies, I like to 
        build new and creative things."
      />
      {/* Languages */}
      <Languages />

      {/* Featured Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Programmer;
