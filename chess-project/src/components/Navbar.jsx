// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onClose }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if the user is authenticated

  return (
    <div style={styles.navbar}>
      <button style={styles.closeButton} onClick={onClose}>X</button>
      <ul style={styles.navList}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/lessons" style={styles.link}>Lessons</Link>
        </li>
        <li>
          <Link to="/practice" style={styles.link}>Practice</Link>
        </li>
        <li>
          <Link to="/quiz" style={styles.link}>Quiz</Link>
        </li>
        <li>
          <Link to="/memes" style={styles.link}>Memes</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/profile" style={styles.link}>Profile</Link>
            </li>
            <li>
              <Link to="/logout" style={styles.link}>Logout</Link> {/* Logout link */}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" style={styles.link}>Login</Link>
            </li>
            <li>
              <Link to="/signup" style={styles.link}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

const styles = {
  navbar: {
    width: "150px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    position: "fixed",
    height: "100vh",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    overflowY: "auto",
    transition: "left 0.3s ease",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  navList: {
    listStyle: "none",
    padding: "0",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    padding: "10px 0",
    fontSize: "18px",
  },
};

export default Navbar;
