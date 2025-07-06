import React, { useState } from "react";
import "./Styling/Contact.css"; // Import the CSS file
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars } from "react-icons/fa"; // Import icons, including FaBars for the drawer toggle

import SideDrawer from "../components/SideDrawer"; // Import the SideDrawer component

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this data to a backend server.
    // For now, we'll just log it and show an alert.
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Drawer functions
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="contact-container">
      {/* Drawer Toggle Button */}
      <button className="drawer-toggle-button" onClick={toggleDrawer} aria-label="Open navigation menu">
        <FaBars />
      </button>

      {/* Render the SideDrawer component */}
      <SideDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        We'd love to hear from you! Whether you have a question about our
        services, want to partner with us, or just want to say hello, feel free
        to reach out. We're here to help build your vision.
      </p>

      <div className="contact-info-grid">
        <div className="contact-info-card">
          <FaPhone className="contact-icon" />
          <h3>Call Us</h3>
          <p>Got an urgent query? We're just a call away!</p>
          <p>
            <a href="tel:+918360608597" aria-label="Call Ankush Bhardwaj, CEO">
              +91 83606 08597
            </a>
          </p>
        </div>

        <div className="contact-info-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>
            <a href="mailto:bhardwajbuilders@gmail.com" aria-label="Email Bhardwaj Builders">
              bhardwajbuilders@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-info-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Our Location</h3>
          <p>Find us in the heart of Chandigarh & Punjab</p>
          <p>SAS NAGAR</p>
          <p>Punjab</p>
        </div>
      </div>

      <div className="contact-form">
        <h2 className="contact-form-title">Send Us a Message</h2>
        <p className="contact-description" style={{ marginBottom: "25px", fontSize: "1.1rem" }}>
          Have a project in mind or need more information? Fill out the form below, and we'll get back to you promptly.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g., John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="email">Your Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g., john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project or inquiry..."
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
          ></textarea>

          <button type="submit" className="submit-button">
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;