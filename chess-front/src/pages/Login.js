import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authenticating, setAuthenticating] = useState(false); // For the authentication message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);

    console.log({ username, password });

    try {
      // Simulate a 4-second delay for the login process
      setTimeout(async () => {
        try {
          // Simulate API call after 4 seconds (the real API call happens here)
          const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });
          console.log(res.data); 

          // Simulate a delay for authentication
          setAuthenticating(true); // Show the "Authentication..." message

          setTimeout(() => {
            // After a brief delay, complete the authentication process
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify({ username })); 

            onLogin({ username });
            navigate("/");

            setLoading(false); 
            setAuthenticating(false); // Hide the "Authentification..." message
          }, 2000); // 2-second delay to show "Authentification..." message

        } catch (err) {
          console.error(err.response); 
          setError(err.response?.data?.message || "Invalid username or password");
          setLoading(false); 
        }
      }, 4000); // 4-second delay for the "Logging in..." message
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        {loading && !authenticating && <p className="loading">Logging in...</p>}
        {authenticating && <p className="loading">Authentification...</p>}
        <form onSubmit={handleLogin} className="form">
          <div className="formGroup">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              required
              placeholder=" "
            />
            <label htmlFor="username">Username:</label>
          </div>
          <div className="formGroup">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
              placeholder=" "
            />
            <label htmlFor="password">Password:</label>
          </div>
          <button type="submit" className="button" disabled={loading}>
            Login
          </button>
          <p>
            Create an account <a href="/signup">Sign up here</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
