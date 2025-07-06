import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
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
  const navigate = useNavigate(); // Initialize useNavigate

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

  // Modified handleNavigation function
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    // For direct scrolling within the same page (e.g., if you had elements on Homescreen with these IDs)
    // You would typically handle this on the target page (Homescreen, About, etc.)
    // if (path === "/") {
    //   setTimeout(() => { // Give time for the component to render
    //     const element = document.getElementById(id);
    //     if (element) {
    //       element.scrollIntoView({ behavior: "smooth" });
    //     }
    //   }, 100);
    // }
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
            {/* Change onClick to navigate to respective pages */}
                        {/* <li><button onClick={() => handleNavigation("/Home")}>Home</button></li> */}

            <li><button onClick={() => handleNavigation("/about")}>About</button></li>
            {/* <li><button onClick={() => handleNavigation("/portfolio")}>Gallery</button></li> Assuming Gallery maps to Portfolio page */}
            <li><button onClick={() => handleNavigation("/contact")}>Contact</button></li>
            {/* If you have a specific section on the home page you want to scroll to */}
            {/* <li><button onClick={() => handleNavigation("/", "home-section-id")}>Home Section</button></li> */}
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