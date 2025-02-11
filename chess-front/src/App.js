// App.js
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
import Logout from "./pages/LogOut";
import HomeGuest from "./pages/HomeGuest";
import ChessClubFooter from "./pages/ChessClubFooter";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership"; 
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import "./App.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        {user && (
          <div className={`navbar ${showNavbar ? "navbar-open" : ""}`}>
            <Navbar onClose={() => setShowNavbar(false)} />
          </div>
        )}

        {showNavbar && (
          <div className="overlay" onClick={() => setShowNavbar(false)} />
        )}

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                user ? <Home user={user} /> : <HomeGuest onLogin={handleLogin} />
              }
            />
            <Route path="/lessons" element={<Lessons user={user} />} />
            <Route path="/practice" element={<Practice user={user} />} />
            <Route path="/quiz" element={<Quiz user={user} />} />
            <Route path="/memes" element={<Memes user={user} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} /> 
            {/* footer links */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

       {user &&  <ChessClubFooter />}
      </div>
    </Router>
  );
}

export default App;