import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css"; // Import the CSS file for styles

const Logout = ({ onLogout }) => {
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      
      localStorage.removeItem("token");
      localStorage.removeItem("user"); 
      console.log("User logged out successfully.");
      

      
      onLogout();

      
      navigate("/"); 
    }, 4000); 

   
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

    injectKeyframes(); 
  }, [navigate, onLogout]);
  

  return (
    <div>
      
      {loading ? (
        <div>
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
