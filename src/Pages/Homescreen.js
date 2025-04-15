import React from "react";
import { motion } from "framer-motion";
import "./Styling/Homescreen.css";

// Image Imports
import ceoImage from "../components/icons/Ceo.jpg";
import worker1 from "../components/icons/labour2.jpeg";
import worker2 from "../components/icons/labour1.jpeg";
import worker3 from "../components/icons/labour3.jpeg";
import worker4 from "../components/icons/labour4.jpeg";

function Homescreen() {
  const workerImages = [worker1, worker2, worker3, worker4];

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to Bhardwaj Builders</h1>
        <p>
          Your dream space crafted with precision, care, and 10+ years of excellence in construction and design.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="cards-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {["Residential", "Commercial", "Interior Design", "Renovation"].map((service, index) => (
          <motion.div
            key={index}
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{service}</h3>
            <p>We provide top-notch {service.toLowerCase()} services with unmatched quality and style.</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CEO Section */}
      <motion.div
        className="ceo-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">Meet Our CEO</h2>
        <div className="ceo-container">
          <img src={ceoImage} alt="CEO" className="ceo-img" />
          <h3>ER. Ankush Bhardwaj</h3>
          <p>
            Led by Er. Ankush Bhardwaj — a seasoned professional with 10+ years of experience — Bhardwaj Builders stands
            for excellence, integrity, and innovation. His visionary leadership transforms blueprints into iconic
            landmarks, earning client trust across the region.
          </p>
        </div>
      </motion.div>

      {/* Workers Section */}
      <motion.div
        className="workers-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">Our Labour & Workers</h2>
        <div className="workers-description">
          <p>
            At Bhardwaj Builders, our strength lies in the hardworking individuals on-site — the ones who bring visions
            to life. Our skilled labour force, engineers, and project teams work with dedication to ensure timely and
            quality completion of each project.
          </p>
        </div>

        <div className="workers-container">
          {workerImages.map((worker, index) => (
            <motion.div
              key={index}
              className="worker-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={worker} alt={`Worker ${index + 1}`} />
              <h4>Worker {index + 1}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Homescreen;
