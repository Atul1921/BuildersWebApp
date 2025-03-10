import React from "react";
import { motion } from "framer-motion";
import "./Styling/Homescreen.css";

function Homescreen() {
  return (
    <div className="home-container">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Construction Co.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Your dream home, built with precision and style.
      </motion.p>
      
      {/* Services Section */}
      <div className="cards-container">
        {["Residential", "Commercial", "Interior Design", "Renovation"].map((service, index) => (
          <motion.div 
            key={index} 
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{service}</h3>
            <p>We provide top-notch {service.toLowerCase()} services.</p>
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <h2 className="projects-title">Our Top 5 Projects</h2>
        <div className="projects-container">
          {["Luxury Villa", "Corporate Tower", "Modern Apartment", "Shopping Mall", "Eco-Friendly House"].map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={`/images/${project.replace(/ /g, "").toLowerCase()}.jpg`} alt={project} />
              <h3>{project}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <h2 className="achievements-title">Our Achievements</h2>
        <div className="achievements-container">
          {["100+ Projects Completed", "500+ Happy Clients", "20+ Years of Experience", "Award-Winning Designs"].map((achievement, index) => (
            <motion.div 
              key={index} 
              className="achievement-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>{achievement}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
