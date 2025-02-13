import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./HomeGuest.css";

const HomeGuest = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="mainContent">
      <div className="auth-container">
        <div className="typing-text">Welcome to the ChessClub ! </div>

        {showLogin ? (
          <Login onLogin={onLogin} />
        ) : (
          <SignUp onLogin={onLogin} />
        )}

        <p>
          {showLogin ? (
            <>
           <div className="text">Don't have an account?{" "}</div>
              <button
                className="toggle-button"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
             <div className="text"> Already have an account?{" "}</div>
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
