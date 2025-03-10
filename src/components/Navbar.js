import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./icons/bhardwajwhite.png"; 
import bg1 from "./icons/bgimg.jpg"; 
import bg2 from "./icons/bgimg2.jpg";
import bg3 from "./icons/bgimg3.jpg";

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

  return (
    <nav style={{ ...styles.navbar, backgroundImage: `url(${slides[currentSlide].image})` }}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <div style={styles.logoContainer}>
            <img src={logo} alt="Logo" style={styles.logo} />
          </div>

          <ul style={styles.navLinks}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/services" style={styles.link}>Services</Link></li>
            <li><Link to="/portfolio" style={styles.link}>Portfolio</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        <div style={styles.textContainer}>
          <h1 key={slides[currentSlide].title} style={styles.title}>{slides[currentSlide].title}</h1>
          <p key={slides[currentSlide].subtitle} style={styles.subtitle}>{slides[currentSlide].subtitle}</p>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    transition: "background-image 1s ease-in-out",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px 50px",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "150px",
    height: "50px",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  textContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Ensures text is centered
    justifyContent: "center",
    width: "80%", // Prevents text from stretching too much
    color: "#fff",
    transition: "opacity 1s ease-in-out",
  },
  title: {
    fontSize: "52px",
    fontWeight: "bold",
    margin: "0",
    lineHeight: "1.2", // Better spacing
    textShadow: "2px 2px 10px rgba(0,0,0,0.7)", // Adds a slight glow effect
    animation: "fadeIn 1s ease-in-out",
  },
  subtitle: {
    fontSize: "22px",
    fontWeight: "300",
    marginTop: "10px",
    lineHeight: "1.5",
    textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
    animation: "fadeIn 1s ease-in-out",
  },
};

export default Navbar;
