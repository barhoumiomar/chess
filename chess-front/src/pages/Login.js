import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);

    console.log({ username, password });

    try {
      setTimeout(async () => {
        try {
          const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });
          console.log(res.data); 

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify({ username })); 

          onLogin({ username });
          navigate("/");
        } catch (err) {
          console.error(err.response); 
          setError(err.response?.data?.message || "Invalid username or password");
        } finally {
          setLoading(false); 
        }
      }, 2000); 
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
        {loading && <p className="loading">Logging in...</p>}
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
        </form>
      </div>
    </div>
  );
};

export default Login;
