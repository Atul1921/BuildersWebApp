import React from "react";
import { motion } from "framer-motion";
import "../Pages/Styling/Homescreen.css";

function Services() {
  return (
    <div className="home-container">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        We offer a variety of high-quality construction and design services.
      </motion.p>
      
      {/* Services Section */}
      <div className="cards-container">
        {["Indoor Design", "Outdoor Construction", "Home Renovation"].map((service, index) => (
          <motion.div 
            key={index} 
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{service}</h3>
            <p>We specialize in {service.toLowerCase()} services.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
