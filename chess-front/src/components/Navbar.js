import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the updated CSS

const Navbar = ({ onClose }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if the user is authenticated

  return (
    <div className="navbar">
      {/* Logo or brand name (optional) */}
      <div className="logo">ChessClub</div>

      {/* Navbar links */}
      <ul className="nav-list">
        {/* Always show Home link */}
        <li>
          <Link to="/" className="link" onClick={onClose}>
            Home
          </Link>
        </li>

        {/* If the user is authenticated, show these links */}
        {isAuthenticated && (
          <>
            <li>
              <Link to="/lessons" className="link" onClick={onClose}>
                Lessons
              </Link>
            </li>
            <li>
              <Link to="/practice" className="link" onClick={onClose}>
                Practice
              </Link>
            </li>
            <li>
              <Link to="/memes" className="link" onClick={onClose}>
                Memes
              </Link>
            </li>
            <li>
              <Link to="/quiz" className="link" onClick={onClose}>
                Quiz
              </Link>
            </li>
            <li>
              <Link to="/logout" className="link" onClick={onClose}>
                Logout
              </Link>
            </li>
          </>
        )}

        {/* If the user is NOT authenticated, show Login and Sign Up links */}
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login" className="link" onClick={onClose}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link" onClick={onClose}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
      
    </div>
  );
};

export default Navbar;