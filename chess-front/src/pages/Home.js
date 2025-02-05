import React from "react";
import HomeUser from "./HomeUser";
import HomeGuest from "./HomeGuest";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import "./Home.css";

const Home = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="home">
      <Navbar onLogin={login} />
      {user ? <HomeUser user={user} /> : <HomeGuest />}
    </div>
  );
};

export default Home;