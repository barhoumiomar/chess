import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state to track login process
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before new request
    setLoading(true); // Set loading state to true while waiting for login

    console.log({ username, password }); // Check the data being sent

    try {
      // Simulate a delay of 3 seconds before sending the login request
      setTimeout(async () => {
        try {
          // Send login request to the backend
          const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });

          console.log(res.data); // Log the response to ensure token is returned

          // Store JWT token and user info in localStorage
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify({ username })); // Store the user in localStorage

          // Call the onLogin function passed as a prop
          onLogin({ username });

          // Redirect to homepage after login
          navigate("/");
        } catch (err) {
          console.error(err.response); // Log the error to see the response structure
          setError(err.response?.data?.message || "Invalid username or password");
        } finally {
          setLoading(false); // Reset loading state once the request is complete
        }
      }, 3000); // 3-second delay
    } catch (err) {
      console.error(err);
      setLoading(false); // Reset loading if an error occurs immediately
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      {error && <p style={styles.error}>{error}</p>}
      {loading && <p style={styles.loading}>Logging in...</p>} {/* Show loading message */}
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button} disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "40px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  loading: {
    color: "#0968AF",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginTop: "5px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    backgroundColor: "#0968AF",
    color: "#fff",
    padding: "10px 0",
    fontSize: "18px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Login;
