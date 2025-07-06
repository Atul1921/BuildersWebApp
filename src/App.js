// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Homescreen from "./Pages/Homescreen";

function App() {
  return (
    <Router>
      <AppContent /> {/* Render a separate component to handle location */}
    </Router>
  );
}

// New component to handle conditional rendering based on route
function AppContent() {
  const location = useLocation(); // Get the current location

  // Determine if the Navbar should be shown
  // Navbar should be shown if the path is "/home" (lowercase) OR "/"
  // It's good practice to normalize paths to lowercase
  const showNavbar = location.pathname === "/home" || location.pathname === "/";

  return (
    <>
      {showNavbar && <Navbar />} {/* Conditionally render Navbar */}

      <Routes>
        {/* Changed path from "/Home" to "/home" to match SideDrawer and best practices */}
        <Route path="/home" element={<Homescreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* Default route for "/" - this will also show the Homescreen */}
        <Route path="/" element={<Homescreen />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;