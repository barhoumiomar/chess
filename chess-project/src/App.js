// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import "./App.css"; // Add custom CSS for the layout

function App() {
  const [showNavbar, setShowNavbar] = useState(false); // State to manage navbar visibility

  return (
    <Router>
      <div style={styles.container}>
        {/* Hamburger Menu Toggle Button */}
        <button style={styles.toggleButton} onClick={() => setShowNavbar(!showNavbar)}>
          ☰
        </button>

        {/* Navbar */}
        <div style={{ ...styles.navbar, left: showNavbar ? "0" : "-250px" }}>
          <Navbar onClose={() => setShowNavbar(false)} />
        </div>

        {/* Overlay */}
        {showNavbar && (
          <div style={styles.overlay} onClick={() => setShowNavbar(false)} />
        )}

        {/* Main Content */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    position: "relative",
  },
  toggleButton: {
    position: "fixed",
    top: "20px",
    left: "20px",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1000, // Ensure the button is above other elements
  },
  navbar: {
    width: "170px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    height: "100vh",
    overflowY: "auto",
    transition: "left 0.3s ease", // Smooth transition for navbar
    zIndex: 1001, // Ensure the navbar is above the overlay
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    zIndex: 999, // Ensure the overlay is below the navbar but above the content
  },
  content: {
    flex: 1,
    padding: "20px",
    transition: "margin-left 0.3s ease", // Smooth transition for content
  },
};

export default App;