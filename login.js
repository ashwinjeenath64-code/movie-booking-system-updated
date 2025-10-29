import React, { useState } from "react";
import "./login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      alert("Welcome, Admin! 🎬");
      onLogin();
    } else {
      alert("❌ Invalid Credentials. Try admin / 1234");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>
      <div className="login-box">
        <h1 className="login-title">🎥 Movie Booking Portal</h1>
        <p className="login-subtitle">Login to start booking your favorite shows</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
