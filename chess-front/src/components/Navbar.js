import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = localStorage.getItem("token");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient shadow-sm p-1">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          ChessClub ♔♕♖♗♘♙
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-semibold" onClick={onClose}>
                🏠 Home
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link to="/lessons" className="nav-link fw-semibold" onClick={onClose}>
                    📚 Learn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/practice" className="nav-link fw-semibold" onClick={onClose}>
                    🧠 Practice
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/watch" className="nav-link fw-semibold" onClick={onClose}>
                    📺 Watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/memes" className="nav-link fw-semibold" onClick={onClose}>
                    🤪 Memes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/quiz" className="nav-link fw-semibold" onClick={onClose}>
                    🧩 Quiz
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link text-danger fw-bold" onClick={onClose}>
                    ↪ Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-success fw-bold" onClick={onClose}>
                    ↩ Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link text-primary fw-bold" onClick={onClose}>
                    📝 Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
