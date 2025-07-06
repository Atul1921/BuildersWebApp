// src/components/SideDrawer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import '../../src/Pages/Styling/SideDrawer.css'; // This will be our new CSS file for the drawer

// SideDrawer component receives props for its open state and close handler
function SideDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop (click to close) */}
      {isOpen && <div className="side-drawer-backdrop" onClick={onClose}></div>}

      {/* The Drawer itself */}
      <nav className={`side-drawer ${isOpen ? 'open' : ''}`}>
        <button className="drawer-close-button" onClick={onClose} aria-label="Close navigation menu">
          <FaTimes /> {/* Close icon */}
        </button>
        <ul className="drawer-nav-list">
          <li className="drawer-nav-item">
            <Link to="/home" onClick={onClose}>Home</Link>
          </li>
          <li className="drawer-nav-item">
            <Link to="/about" onClick={onClose}>About</Link>
          </li>
          <li className="drawer-nav-item">
            <Link to="/services" onClick={onClose}>Services</Link>
          </li>
          <li className="drawer-nav-item">
            <Link to="/portfolio" onClick={onClose}>Portfolio</Link>
          </li>
          <li className="drawer-nav-item">
            <Link to="/contact" onClick={onClose}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideDrawer;