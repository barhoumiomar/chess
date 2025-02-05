import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(captchaText);
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (captcha !== generatedCaptcha) {
      setError("Captcha does not match");
      setLoading(false);
      return;
    }

    console.log({ username, password });

    try {
      setTimeout(async () => {
        try {
          const res = await axios.post("http://localhost:5000/api/auth/login", {
            username,
            password,
          });

          console.log(res.data);
          setAuthenticating(true);

          setTimeout(() => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify({ username }));

            onLogin({ username });
            navigate("/");

            setLoading(false);
            setAuthenticating(false);
          }, 2000);
        } catch (err) {
          console.error(err.response);
          setError(err.response?.data?.message || "Invalid username or password");
          setLoading(false);
        }
      }, 4000);
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
          <div className="formGroup">
            <p className="captcha-text">{generatedCaptcha}</p>
            <input
              type="text"
              id="captcha"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              className="input"
              required
              placeholder="Enter CAPTCHA"
            />
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