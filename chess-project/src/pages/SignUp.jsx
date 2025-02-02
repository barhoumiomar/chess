// src/pages/SignUp.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation after signup

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
      // Send signup request to the backend
      const res = await axios.post("http://localhost:5000/api/auth/signup", { username, password });
  
      // Save the JWT token to localStorage
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
  
      // Notify parent component about successful login
       // Pass the logged-in user to parent
  
      // Redirect to the profile creation page
      navigate("/profile"); // Redirect to the profile creation page
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    }
  };
  

  return (
    <div style={styles.container}>
      <h1>Sign Up</h1>

      {/* Display success message if present */}
      {successMessage && <p style={styles.success}>{successMessage}</p>}

      {/* Display error message if present */}
      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <a href="/signin">Sign in here</a>.<br />
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  success: {
    color: "green",
    fontSize: "16px",
    marginBottom: "10px",
  },
};

export default SignUp;
