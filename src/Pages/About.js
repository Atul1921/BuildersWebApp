import React from "react";
import teamPlaceholder from "../components/icons/bgimg2.jpg"; // Placeholder image for team members
import ceoImage from "../components/icons/bgimg2.jpg"; // CEO Image

function About() {
  return (
    <div style={styles.aboutContainer}>
      <h1 style={styles.title}>About Bhardwaj Builders</h1>
      
      <p style={styles.description}>
        Bhardwaj Builders, founded by <strong>ER. Ankush Bhardwaj</strong>, is a leading construction company
        specializing in high-quality indoor and outdoor architectural designs. With a strong commitment to excellence,
        innovation, and customer satisfaction, we bring dreams to reality by constructing spaces that blend
        functionality and aesthetics seamlessly.
      </p>
      
      <h2 style={styles.sectionTitle}>Meet Our CEO</h2>
      <div style={styles.ceoContainer}>
        <img src={ceoImage} alt="ER. Ankush Bhardwaj" style={styles.ceoImage} />
        <p style={styles.ceoDescription}>
          <strong>ER. Ankush Bhardwaj</strong> is a visionary leader in the construction industry with years of experience
          in delivering high-end projects. His expertise and innovative approach have shaped Bhardwaj Builders into a
          trusted name in the field.
        </p>
      </div>
      
      <h2 style={styles.sectionTitle}>Our Mission</h2>
      <p style={styles.description}>
        At Bhardwaj Builders, our mission is to provide top-notch construction services with precision and quality.
        We aim to build sustainable and durable structures that stand the test of time, ensuring complete client
        satisfaction and contributing to the growth of modern architecture.
      </p>

      <h2 style={styles.sectionTitle}>Our Services</h2>
      <ul style={styles.list}>
        {/* <li>Residential Construction</li> */}
        <li>Commercial Buildings</li>
        <li>Interior and Exterior Designing</li>
        <li>Renovation and Remodeling</li>
        <li>Landscaping and Outdoor Development</li>
      </ul>

      <h2 style={styles.sectionTitle}>Meet Our Team</h2>
      {/* <div style={styles.teamContainer}>
        {["John Doe", "Jane Smith", "Michael Brown", "Rajesh Kumar", "Priya Verma"].map((name, index) => (
          <div key={index} style={styles.teamMember}>
            <img src={teamPlaceholder} alt="Team Member" style={styles.teamImage} />
            <h3>{name}</h3>
            <p>{["Senior Architect", "Project Manager", "Lead Engineer", "Structural Engineer", "Interior Designer"][index]}</p>
          </div>
        ))}
      </div> */}

      <h2 style={styles.sectionTitle}>Contact Us</h2>
      <p style={styles.contactInfo}>
        <strong>Phone:</strong> +91 XXXXXXXXXX <br />
        <strong>Email:</strong> contact@bhardwajbuilders.com <br />
        <strong>Address:</strong> 123 Construction Lane, New Delhi, India
      </p>
    </div>
  );
}

const styles = {
  aboutContainer: {
    textAlign: "center",
    padding: "50px 20px",
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.3rem",
    maxWidth: "800px",
    textAlign: "justify",
    lineHeight: "1.6",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "40px",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.2rem",
  },
  ceoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "800px",
  },
  ceoImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px",
  },
  ceoDescription: {
    fontSize: "1.3rem",
    textAlign: "justify",
    lineHeight: "1.6",
  },
  teamContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "auto",
  },
  teamMember: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    color: "#000",
  },
  teamImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  contactInfo: {
    fontSize: "1.2rem",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default About;
