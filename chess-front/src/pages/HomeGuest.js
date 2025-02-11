import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./HomeGuest.css";

const HomeGuest = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="mainContent">
      <div className="auth-container">
       
        {showLogin ? (
          
          <Login  onLogin={onLogin} />
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