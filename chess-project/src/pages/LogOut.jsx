// src/pages/Logout.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for loading

  useEffect(() => {
    // Set loading to true before starting the logout process
    setLoading(true);

    // Simulate a 2-second delay for the logout process
    setTimeout(() => {
      // Clear token from localStorage
      localStorage.removeItem("token");
      console.log("User logged out successfully.");

      // Call the onLogout prop to update the app state
      onLogout();

      // Redirect to the home page after logout
      navigate("/");
    }, 2000); // 2-second delay before logout
  }, [navigate, onLogout]);

  return (
    <div style={styles.container}>
      {loading ? (
        <div style={styles.loadingMessage}>
          <h2>Logging out...</h2>
          <div className="spinner"></div>
        </div>
      ) : (
        <h2>Logged out successfully</h2>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  loadingMessage: {
    textAlign: "center",
    padding: "20px",
  },
};

export default Logout;
