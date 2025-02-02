import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Memes from "./pages/Memes";
import Profile from "./pages/Profile";
import Logout from "./pages/LogOut";


function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [user, setUser] = useState(null);

 
    

  const handleLogin = (userData) => {
    setUser(userData); // Set the user data on successful login
  };

  const handleLogout = () => {
    // Clear the user data and token on logout
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Router>
      <div style={styles.container}>
        <button style={styles.toggleButton} onClick={() => setShowNavbar(!showNavbar)}>
          ☰
        </button>

        <div style={{ ...styles.navbar, left: showNavbar ? "0" : "-250px" }}>
          <Navbar onClose={() => setShowNavbar(false)} />
        </div>

        {showNavbar && (
          <div style={styles.overlay} onClick={() => setShowNavbar(false)} />
        )}
        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/memes" element={<Memes />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={user ? <Profile user={user} /> : <Login />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    position: "relative",
  },
container: {
    display: "flex",
    flexDirection: "column",
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
    zIndex: 1000,
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
    transition: "left 0.3s ease",
    zIndex: 1001,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },
};



export default App;
