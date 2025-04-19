import React from "react";
import '../Pages/Styling/Footer.css';  // Import the new footer.css

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Column - Company Info */}
        <div className="footer-column">
          <h3>Bhardwaj Builders</h3>
          <p>Building trust, quality, and dreams for over a decade.</p>
          <p><strong>Location:</strong> SAS Nagar, Punjab, India</p>
          <p><strong>Phone:</strong> +91 83606 08597</p>
          <p><strong>Phone:</strong> +91 99882 72140</p>
        </div>

        {/* Right Column - Copyright */}
        <div className="footer-right-column">
          <p>&copy; 2024 Bhardwaj Builders</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
