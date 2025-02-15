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
import Contact from "./pages/Contact";
import Membership from "./pages/Membership"; 
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Watch from "./pages/Watch";
import "./App.css"; 

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const handleLogin = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  return (
    <Router>
      <div className="app-container">
       
        
        <div className="content">
          <Routes>
            <Route path="/" element={user ? <Home user={user} /> : <HomeGuest onLogin={handleLogin} />} />
            <Route path="/lessons" element={<Lessons user={user} />} />
            <Route path="/watch" element={<Watch user={user} />} />
            <Route path="/practice" element={<Practice user={user} />} />
            <Route path="/quiz" element={<Quiz user={user} />} />
            <Route path="/memes" element={<Memes user={user} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            
            {/* Footer Links */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
