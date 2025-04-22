import React from "react";
import { motion } from "framer-motion";
import "./Styling/Homescreen.css";
import { FaHome, FaBuilding, FaPaintRoller, FaTools } from "react-icons/fa";

// Image Imports
import ceoImage from "../components/icons/Ceo.jpg";
import worker1 from "../components/icons/indoor.jpeg";
import worker2 from "../components/icons/labour1.jpeg";
import worker3 from "../components/icons/labour3.jpeg";
import worker4 from "../components/icons/labour4.jpeg";

const serviceIcons = {
  Residential: <FaHome />,
  Commercial: <FaBuilding />,
  "Interior Design": <FaPaintRoller />,
  Renovation: <FaTools />,
};

function Homescreen() {
  const workerImages = [worker1, worker2, worker3, worker4];

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <motion.div
        className="welcome-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15, duration: 1 }}
      >
        <h1>Crafting Your Vision, Building Reality</h1>
        <p>
          With over a decade of expertise, we transform dreams into tangible structures,
          blending innovation with timeless craftsmanship.
        </p>
        <motion.button
          className="learn-more-button"
          whileHover={{ scale: 1.05, backgroundColor: "#fbc02d" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Services
        </motion.button>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="cards-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {["Residential", "Commercial", "Interior Design", "Renovation"].map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.08, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon-background">
              <div className="service-icon">{serviceIcons[service]}</div>
            </div>
            <h3>{service}</h3>
            <p className="service-description">
              Expert solutions for your {service.toLowerCase()} needs, focusing on quality and innovation.
            </p>
            <motion.button
              className="service-button"
              whileHover={{ backgroundColor: "#2a5298" }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* CEO Section */}
      <div className="ceo-section">
        <div className="ceo-container">
          <motion.img
            src={ceoImage}
            alt="CEO"
            className="ceo-img"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div className="ceo-info">
            <motion.h2
              className="ceo-name"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Meet Er. Ankush Bhardwaj
            </motion.h2>
            <motion.p
              className="ceo-description"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              A visionary leader with over a decade of experience, driving Bhardwaj Builders towards
              excellence and innovation in the construction industry. His commitment to quality and
              client satisfaction shapes every project we undertake.
            </motion.p>
          </div>
        </div>
      </div>

   {/* Workers Section */}
<div className="workers-section">
  <h2 className="workers-title">Our Dedicated Team</h2>

  <p className="team-description">
  Our dedicated team brings together a wealth of experience and unmatched expertise across various domains of construction. 
  From planning and layout to the final finishing touches, every member contributes their skills with professionalism and passion. 
  Whether it's ensuring structural integrity, maintaining on-site safety, handling plumbing or electrical systems, or perfecting interior 
  detailing, our team is committed to delivering high-quality results on every project. Their collaboration, dedication, and eye for 
  detail ensure that every build not only meets but exceeds expectations.
</p>


  {/* Worker Cards */}
  <motion.div
    className="workers-container"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ staggerChildren: 0.3, duration: 0.7 }}
    viewport={{ once: true }}
  >
   {[worker1, worker2, worker3, worker4].map((worker, index) => (
  <motion.div
    key={index}
    className="worker-card"
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
    initial="hidden"
    whileInView="visible"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 100, damping: 10 }}
  >
    <img src={worker} alt={`worker-${index}`} className="worker-img" />
  </motion.div>
))}

  </motion.div>
</div>

    </div>
  );
}

export default Homescreen;
