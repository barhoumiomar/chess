import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("token");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">ChessClub♔♕♖♗♘♙</div>
      

     
      <ul className={`nav-list ${isOpen ? "navbar-open" : ""}`}>
        <li>
          <Link to="/" className="link" onClick={onClose}>
          🏠Home
          </Link>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <Link to="/lessons" className="link" onClick={onClose}>
              📚Learn
              </Link>
            </li>
              <li>
                <Link to="/practice" className="link" onClick={onClose}>
                🧠 Practice
                </Link>
              </li>
              <li>
                <Link to="/watch" className="link" onClick={onClose}>
                📺 watch
                </Link>
              </li>
            <li>
              <Link to="/memes" className="link" onClick={onClose}>
              🤪Memes
              </Link>
            </li>
            
            <li>
              <Link to="/quiz" className="link" onClick={onClose}>
              🧩Quiz
              </Link>
            </li>
            <li>
              <Link to="/logout" className="link" onClick={onClose}>
              ↪ Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="link" onClick={onClose}>
              ↩ Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link" onClick={onClose}>
              📝 Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
