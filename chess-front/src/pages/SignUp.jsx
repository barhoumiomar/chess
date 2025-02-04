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
      
      const res = await axios.post("http://localhost:5000/api/auth/signup", { username, password });
  
      
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
  
      
  
      
      navigate("/login"); 
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    }
  };
  

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>Sign Up</h1>

        {successMessage && <p style={styles.success}>{successMessage}</p>}
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
          <button type="submit" style={styles.button} disabled={!!error}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Sign in here</a>.
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundImage: "url('https://c1.wallpaperflare.com/preview/979/274/351/chess-chess-men-game-chess-pieces.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxWidth: "400px",
    padding: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent for better contrast
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#0968AF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
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
