import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Pages/Styling/Porfolio.css"; // Corrected CSS import path and name

// Import your design images
// IMPORTANT: Replace these with your actual high-quality design images for production
import villaExterior from "../components/icons/bgimg.jpg";
import villaInterior from "../components/icons/bgimg3.jpg";
import officeExterior from "../components/icons/bgimg2.jpg";

// Placeholder images for additional designs
// You MUST create these files in src/components/icons/ or adjust paths/names
import placeholderInterior1 from "../components/icons/interior1.jpeg";
import placeholderExterior1 from "../components/icons/interior2.jpeg";
import placeholderInterior2 from "../components/icons/interior3.jpeg";
import placeholderExterior2 from "../components/icons/interior5.jpeg";
import placeholderInterior3 from "../components/icons/interior4.jpeg";
import placeholderExterior3 from "../components/icons/interior6.jpeg";


// Define all your design projects with categories and images
const allDesigns = [
  // Starting with a mix, but the initial display will be the first 5 "featured"
  // When a category is selected, all designs will be filtered.
  {
    id: 1,
    name: "Luxury Villa - Modern Exterior",
    category: "exterior",
    description: "A breathtaking modern exterior design for a luxury villa, featuring sleek lines and expansive glass. Perfect for contemporary living.",
    image: villaExterior,
  },
  {
    id: 2,
    name: "Luxury Villa - Elegant Interior",
    category: "interior",
    description: "Sophisticated interior design for a luxury villa, blending comfort with high-end finishes and smart home technology. Explore spacious living areas.",
    image: villaInterior,
  },
  {
    id: 3,
    name: "Downtown Office - Striking Facade",
    category: "exterior",
    description: "The striking exterior design of a 25-story commercial building, showcasing innovative facade materials and sustainable architectural elements.",
    image: officeExterior,
  },
  {
    id: 4,
    name: "Urban Apartment - Chic Interior",
    category: "interior",
    description: "A cozy yet chic interior design for an urban apartment, maximizing space and light with minimalist aesthetics and warm textures.",
    image: placeholderInterior1,
  },
  {
    id: 5,
    name: "Seaside Retreat - Panoramic Exterior",
    category: "exterior",
    description: "An open-concept exterior design for a seaside retreat, offering panoramic views and seamless integration with the natural landscape.",
    image: placeholderExterior1,
  },

  // Additional Designs - these will be included in the filtering logic
  {
    id: 6,
    name: "Modern Home - Open Plan Interior",
    category: "interior",
    description: "An expansive open-plan interior design for a modern family home, emphasizing flow and connection between living spaces.",
    image: placeholderInterior2,
  },
  {
    id: 7,
    name: "Commercial Complex - Innovative Exterior",
    category: "exterior",
    description: "Innovative exterior design for a commercial complex, combining functional space with a visually appealing and sustainable facade.",
    image: placeholderExterior2,
  },
  {
    id: 8,
    name: "Minimalist Loft - Interior Serenity",
    category: "interior",
    description: "A serene minimalist interior design for a city loft, focusing on clean lines, natural materials, and a calming color palette.",
    image: placeholderInterior3,
  },
  {
    id: 9,
    name: "Contemporary Garden - Exterior Landscape",
    category: "exterior",
    description: "A contemporary garden design featuring unique hardscaping, drought-tolerant plants, and integrated lighting for evening ambiance.",
    image: placeholderExterior3,
  },
  // Add more designs here to fill out your gallery!
];

function Portfolio() {
  // 'initial' category for display. Set to 'featured' to show the first 5,
  // or 'all' if you want to show everything by default.
  const [activeCategory, setActiveCategory] = useState("featured");
  const [selectedImage, setSelectedImage] = useState(null);

  // Determine which designs to display based on activeCategory
  const displayedDesigns = activeCategory === "featured"
    ? allDesigns.slice(0, 5) // Show only the first 5 designs
    : allDesigns.filter(design => design.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Creative Designs
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Explore a curated collection of our finest interior and exterior design projects.
      </motion.p>

      {/* --- Category Selection Buttons (Top of All, No background images) --- */}
      <div className="category-selection-buttons">
        <motion.button
          className={`category-button ${activeCategory === "interior" ? "active" : ""}`}
          onClick={() => setActiveCategory("interior")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Interior Designs
        </motion.button>
        <motion.button
          className={`category-button ${activeCategory === "exterior" ? "active" : ""}`}
          onClick={() => setActiveCategory("exterior")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Exterior Designs
        </motion.button>
        {/* Add an 'All Designs' button here if you want to allow users to see all designs after filtering */}
        {activeCategory !== "featured" && ( // Only show "Show All" if not currently showing featured
          <motion.button
            className={`category-button show-all-button ${activeCategory === "featured" ? "active" : ""}`}
            onClick={() => setActiveCategory("featured")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show Featured
          </motion.button>
        )}
      </div>

      {/* --- Dynamic Design Grid --- */}
      <h2 className="section-title">
        {activeCategory === "featured" ? "Featured Creations" :
         activeCategory === "interior" ? "All Interior Designs" :
         "All Exterior Designs"}
      </h2>
      {displayedDesigns.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="no-designs-message"
        >
          No designs found for this category yet. Please check back later!
        </motion.p>
      )}
      <motion.div
        className="designs-grid" // This grid will show the filtered or featured designs
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <AnimatePresence mode="wait"> {/* 'wait' mode ensures exit animation completes before new enter */}
          {displayedDesigns.map((design) => (
            <motion.div
              key={design.id}
              className="design-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onClick={() => openModal(design.image)}
            >
              <img src={design.image} alt={design.name} />
              <div className="design-info">
                <h3>{design.name}</h3>
                <p>{design.description}</p>
                <motion.button
                  className="view-design-button"
                  onClick={(e) => { e.stopPropagation(); openModal(design.image); }}
                  whileHover={{ scale: 1.02, backgroundColor: "#e67e22" }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Design
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- Image Modal/Lightbox --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close on overlay click
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <img src={selectedImage} alt="Selected Design" />
              <button className="modal-close-button" onClick={closeModal}>&times;</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;