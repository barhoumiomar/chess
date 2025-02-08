import React from "react";
import "./ChessClubFooter.css"; // Import the CSS file

const ChessClubFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Club Name */}
        <div className="footer-logo">
          <img src="https://img.freepik.com/premium-vector/chess-logo-vector-illustration-template-logo-design-chess-club_950644-534.jpg" alt="Chess Club Logo" className="logo" />
          <span className="club-name">Chess Club</span>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/membership">Membership</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} Chess Club. All rights reserved.
      </div>
    </footer>
  );
};

export default ChessClubFooter;
