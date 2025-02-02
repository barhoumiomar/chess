// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onClose }) => {
  return (
    <nav style={styles.nav}>
      <button style={styles.closeButton} onClick={onClose}>
        ×
      </button>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/lessons" style={styles.link}>Lessons</Link>
      <Link to="/practice" style={styles.link}>Practice</Link>
      <Link to="/quiz" style={styles.link}>Quiz</Link>
      <Link to="/memes" style={styles.link}>Memes</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/signup" style={styles.link}>Sign Up</Link> {/* ✅ Uncommented Signup */}
      <Link to="/Profile" style={styles.link}>Profile</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  linkHover: {
    backgroundColor: "#555",
  },
};

export default Navbar;
