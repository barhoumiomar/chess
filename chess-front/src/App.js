import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Memes from "./pages/Memes";
import Logout from "./pages/LogOut";
import './App.css'; // Import external CSS file

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
      <div className="app-container">

        <div className={`navbar ${showNavbar ? "navbar-open" : ""}`}>
          <Navbar onClose={() => setShowNavbar(false)} />
        </div>

        {showNavbar && (
          <div className="overlay" onClick={() => setShowNavbar(false)} />
        )}

        <div className="content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/memes" element={<Memes />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
