import React, { useState, useEffect } from "react";
import logo from "./icons/bhardwajwhite.png";
import bg1 from "./icons/bgimg.jpg";
import bg2 from "./icons/bgimg2.jpg";
import bg3 from "./icons/bgimg3.jpg";
import "../Pages/Styling/Navbar.css";

const slides = [
  { image: bg1, title: "Welcome to Bhardwaj Enterprises", subtitle: "Crafting Excellence, Building the Future" },
  { image: bg2, title: "Innovative Solutions", subtitle: "Turning Your Ideas Into Reality" },
  { image: bg3, title: "Quality and Commitment", subtitle: "Delivering the Best, Always" },
];

function Navbar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
      <div className="overlay">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <ul className="nav-links">
            <li><button onClick={() => handleScroll("Homescreen")}>Home</button></li>
            <li><button onClick={() => handleScroll("about")}>About</button></li>
            <li><button onClick={() => handleScroll("services")}>Services</button></li>
            <li><button onClick={() => handleScroll("portfolio")}>Portfolio</button></li>
            <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
          </ul>
        </div>
        <div className="text-container">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
