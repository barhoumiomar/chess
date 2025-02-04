// src/pages/Logout.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading before logout process

    setTimeout(() => {
      // Remove user token from localStorage to log them out
      localStorage.removeItem("token");
      localStorage.removeItem("user"); // Make sure to clear user data too
      console.log("User logged out successfully.");

      // Call the onLogout prop to update the app state
      onLogout();

      // Redirect to the HomeGuest page after logout
      navigate("/"); // Redirect to HomeGuest page
    }, 2000); // 2-second delay before logout
  }, [navigate, onLogout]);

  return (
    <div style={styles.container}>
      {loading ? (
        <div style={styles.loadingMessage}>
          <h2>Logging out...</h2>
          <div className="spinner"></div> {/* Optional spinner */}
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
