import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css"; // Import the CSS file for styles

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
    <div className="container">
      {loading ? (
        <div className="l">
          <h2 className="messageText">Logging out...</h2>
          <div className="spinner"></div>
        </div>
      ) : (
        <h2 className="messageText">Logged out successfully</h2>
      )}
    </div>
  );
};

export default Logout;
