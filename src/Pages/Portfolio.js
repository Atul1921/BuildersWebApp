import React from "react";
import { motion } from "framer-motion";
import "./Styling/Homescreen.css";

function Portfolio() {
  return (
    <div className="home-container">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Portfolio
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Check out our completed projects.
      </motion.p>
      
      {/* Portfolio Projects */}
      <div className="projects-container">
        {["Luxury Villa Redesign", "Downtown Office Tower", "Eco-Friendly Residential"]
          .map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>{project}</h3>
              <p>
                {index === 0 && "A complete transformation of a luxury villa with modern interiors, smart home features, and energy-efficient solutions."}
                {index === 1 && "A 25-story commercial building designed with sustainability in mind, featuring state-of-the-art office spaces and green terraces."}
                {index === 2 && "A residential project focused on sustainability, using recycled materials, solar panels, and rainwater harvesting systems."}
              </p>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Portfolio;
