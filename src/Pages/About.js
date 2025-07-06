// src/About.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideDrawer from "../components/SideDrawer"; // Import the new SideDrawer component
import "./Styling/About.css"; // Keep your existing About page styles
import ceoImage from "../components/icons/Ceo.jpg";

// Import icons for services (FaBars and FaTimes are now in SideDrawer.js)
import { FaBuilding, FaPaintBrush, FaTools, FaTree, FaBars } from "react-icons/fa";

function About() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer visibility

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="about-container">
      {/* Drawer Toggle Button - Stays here or in a global header if you have one */}
      <button className="drawer-toggle-button" onClick={toggleDrawer} aria-label="Open navigation menu">
        <FaBars />
      </button>

      {/* Render the SideDrawer component */}
      <SideDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      {/* --- Existing About Page Content Starts Here --- */}

      <h1 className="about-title">About Bhardwaj Builders</h1>

      <p className="about-description">
        Bhardwaj Builders founded by ER. Ankush Bhardwaj, is a pioneering construction company dedicated to
        delivering exceptional indoor and outdoor architectural designs. With an unwavering commitment to
        **excellence, innovation, and client satisfaction**, we transform your visions into tangible realities,
        crafting spaces that seamlessly blend functionality with stunning aesthetics.
      </p>

      {/* Horizontal Rule */}
      <hr style={{ width: '80%', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.2)', margin: '60px auto' }} />


      <h2 className="section-title">Meet Our Visionary CEO</h2>
      <div className="ceo-container">
        <img src={ceoImage} alt="ER. Ankush Bhardwaj, CEO" className="ceo-img" />
        <div className="ceo-info">
          <h3 className="ceo-name">ER. Ankush Bhardwaj</h3>
          <p className="ceo-description-text">
            He is the driving force behind Bhardwaj Builders, bringing a wealth of experience
            and a forward-thinking approach to the construction industry. With a proven track record of successfully
            delivering high-end residential, commercial, and bespoke architectural projects, his leadership ensures
            every build embodies quality, efficiency, and artistic integrity. Ankush is not just a builder; he's a
            creator of legacies, passionately committed to pushing the boundaries of modern design and sustainable construction practices.
            His dedication to client-centric solutions and meticulous attention to detail have earned Bhardwaj Builders
            its reputation as a trusted name in the field.
          </p>
          <p className="ceo-description-text">
            Skills & Expertise:
          </p>
          <ul className="skills-list">
            <li className="skill-item">Architectural Design</li>
            <li className="skill-item">Project Management</li>
            <li className="skill-item">Structural Engineering</li>
            <li className="skill-item">Sustainable Construction</li>
            <li className="skill-item">Client Relationship Management</li>
            <li className="skill-item">Innovation & Technology Integration</li>
          </ul>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr style={{ width: '80%', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.2)', margin: '60px auto' }} />

      <h2 className="section-title">Our Core Mission</h2>
      <p className="mission-description">
        At Bhardwaj Builders, our mission is to redefine construction by providing **top-notch services** with
        uncompromising precision and quality. We are committed to building sustainable, durable, and aesthetically
        pleasing structures that not only stand the test of time but also enhance the lives of those who inhabit them.
        Ensuring complete client satisfaction and contributing positively to the evolution of modern architecture
        remain at the heart of everything we do.
      </p>

      {/* Horizontal Rule */}
      <hr style={{ width: '80%', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.2)', margin: '60px auto' }} />

      <h2 className="section-title">Our Specialized Services</h2>
      <ul className="services-list">
        <li className="service-item">
          <FaBuilding className="service-icon" />
          <strong>Commercial Buildings</strong>
          <p>Crafting functional and impressive spaces for businesses of all sizes.</p>
        </li>
        <li className="service-item">
          <FaPaintBrush className="service-icon" />
          <strong>Interior & Exterior Designing</strong>
          <p>Transforming visions into captivating realities, inside and out.</p>
        </li>
        <li className="service-item">
          <FaTools className="service-icon" />
          <strong>Renovation & Remodeling</strong>
          <p>Breathing new life into existing structures with modern upgrades.</p>
        </li>
        <li className="service-item">
          <FaTree className="service-icon" />
          <strong>Landscaping & Outdoor Development</strong>
          <p>Designing beautiful and functional outdoor environments.</p>
        </li>
      </ul>

      {/* Horizontal Rule */}
      <hr style={{ width: '80%', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.2)', margin: '60px auto' }} />

      <div className="cta-section">
        <h2>Ready to Build Your Dream Project?</h2>
        <p>
          We're excited to partner with you and bring your architectural aspirations to life.
          Reach out today for a consultation or to learn more about how we can help.
        </p>
        <Link to="/contact" className="cta-button">
          Contact Us Today!
        </Link>
      </div>
    </div>
  );
}

export default About;