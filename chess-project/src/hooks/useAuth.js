// src/hooks/useAuth.js
import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Set the user state if found
    }
  }, []);

  // Logout function
  const logout = () => {
    // Remove user data and token from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // If there's a token stored

    // Clear any other user-specific data if necessary
    // localStorage.removeItem("otherKey");  // Add any other keys you need to clear

    setUser(null); // Set the user state to null after logout
  };

  return { user, logout };
};

export default useAuth;
