import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUp = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // Show success message after successful signup
      setSuccessMessage("Signup successful! Redirecting to login...");

      // Redirect to the HomeGuest page after 2 seconds (for the user to see the success message)
      setTimeout(() => {
        navigate("/login"); // Redirect to HomeGuest page
      }, 2000); // You can adjust the time to your preference
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    }
  };

  return (
    <div className="">
      <div className="auth-container">
        <h1>Sign Up</h1>

        {successMessage && <p className="success">{successMessage}</p>}
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            required
          />
          <button type="submit" className="button" disabled={!!error}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
