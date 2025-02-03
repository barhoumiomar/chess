// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import HomeUser from "./HomeUser";
import HomeGuest from "./HomeGuest";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth"; // Import the custom hook

const Home = () => {
  const { user, logout } = useAuth(); // Use the useAuth hook for managing user state and logout

  useEffect(() => {
    // Whenever the component mounts, the user state is automatically set by useAuth
  }, [user]);

  const handleLogout = () => {
    logout(); // Call logout to clear localStorage
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} /> {/* Pass the logout function to Navbar */}
      {user ? <HomeUser user={user} /> : <HomeGuest />} {/* Show HomeUser or HomeGuest based on the user state */}
    </div>
  );
};

export default Home;
