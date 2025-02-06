import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./HomeGuest.css";

const HomeGuest = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="mainContent">
      {/* Left Section: Welcome Message */}
      <div className="welcome-section">
        <h1 className="title">ChessClub</h1>
        <h2 className="subtitle">
          Ready to make your next move? Log in to track your progress, save your
          games, and access exclusive chess puzzles!
        </h2>
      </div>

      
      <div className="auth-container">
        {showLogin ? (
          <Login onLogin={onLogin} />
        ) : (
          <SignUp onLogin={onLogin} />
        )}
        <p>
          {showLogin ? (
            <>
              Don't have an account?{" "}
              <button
                className="toggle-button"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="toggle-button"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default HomeGuest;