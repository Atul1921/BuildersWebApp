import React, { useState, useEffect } from "react";
import logo from "./icons/bhardwajwhite.png";
import bg1 from "./icons/bgimg.jpg";
import bg2 from "./icons/bgimg2.jpg";
import bg3 from "./icons/bgimg3.jpg";
import "../Pages/Styling/Navbar.css";

const slides = [
  { image: bg1, title: "Welcome to Bhardwaj Builders", subtitle: "Crafting Excellence, Building the Future" },
  { image: bg2, title: "Innovative Solutions", subtitle: "Turning Your Ideas Into Reality" },
  { image: bg3, title: "Quality and Commitment", subtitle: "Delivering the Best, Always" },
];

function Navbar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTransitioning(false);
      }, 600); // Match the CSS transition duration
    }
  };

  const goToPrevSlide = () => {
    goToSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    goToSlide((prev) => (prev + 1) % slides.length);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar ${transitioning ? "fade-out" : ""}`}
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="overlay">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <ul className="nav-links">
            <li><button onClick={() => handleScroll("about-section")}>About</button></li>
            <li><button onClick={() => handleScroll("gallery-section")}>Gallery</button></li>
            <li><button onClick={() => handleScroll("contact-section")}>Contact</button></li>
          </ul>
        </div>
        <div className={`text-container ${transitioning ? "fade-out-text" : ""}`}>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;