// src/pages/Logout.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Remove user token from localStorage to log them out
      localStorage.removeItem("token");
      localStorage.removeItem("user"); // Make sure to clear user data too
      console.log("User logged out successfully.");

      // Call the onLogout prop to update the app state
      onLogout();

      // Redirect to the HomeGuest page after logout
      navigate("/"); // Redirect to HomeGuest page
    }, 3000); // 3-second delay before logout

    // Inject spinner keyframes rule dynamically
    const injectKeyframes = () => {
      try {
        const styleSheet = document.styleSheets[0];
        if (styleSheet) {
          styleSheet.insertRule(`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `, styleSheet.cssRules.length);
        } else {
          console.error("No stylesheets found to insert the rule.");
        }
      } catch (error) {
        console.error("Error inserting keyframe rule:", error);
      }
    };

    injectKeyframes(); // Call function to inject the keyframes rule
  }, [navigate, onLogout]);

  return (
    <div style={styles.container}>
      {loading ? (
        <div style={styles.loadingMessage}>
          <h2 style={styles.messageText}>Logging out...</h2>
          <div className="spinner" style={styles.spinner}></div>
        </div>
      ) : (
        <h2 style={styles.messageText}>Logged out successfully</h2>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://files.oaiusercontent.com/file-6C1pjensyAayscwQepBBwE?se=2025-02-04T01%3A09%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D81cbaf54-d152-47b1-bacc-b01f3f53f325.webp&sig=zCwwmRFFMJo1i5l8jju/WZB9%2B04VvKmkUNbLZRbUKuY%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    height: "100vh",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loadingMessage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  messageText: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  spinner: {
    border: "8px solid #f3f3f3", /* Light grey */
    borderTop: "8px solid #3498db", /* Blue */
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 2s linear infinite", /* Animation */
  },
};

export default Logout;
