import React from "react";

function Footer() {
  return (
    <footer style={{ 
      background: '#1e3c72',
      color: "#fff",
      padding: "30px 40px",
      fontSize: "0.95rem",
      fontFamily: "Segoe UI, sans-serif",
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}>
        {/* Left Column - Company Info */}
        <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <h3 style={{ color: "#f3c623", marginBottom: "10px" }}>Bhardwaj Builders</h3>
          <p>Building trust, quality, and dreams for over a decade.</p>
          <p><strong>Location:</strong> SAS Nagar, Punjab, India</p>
          <p><strong>Phone:</strong> +91 83606 08597</p>
          <p><strong>Phone:</strong> +91 99882 72140</p>
          {/* <p><strong>Email:</strong> info@bhardwajbuilders.com</p> */}
        </div>

        {/* Right Column - Copyright */}
        <div style={{ flex: "1 1 200px", textAlign: "right", minWidth: "200px", marginTop: "20px" }}>
          <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "10px" }}>
            &copy; 2024 Bhardwaj Builders
          </p>
          <p style={{ color: "#aaa", fontSize: "0.8rem" }}>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
