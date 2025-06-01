// Signin.js
import React, { useState } from "react";
import "./Signin.css";

function Signin() {
  const [emailPrefix, setEmailPrefix] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in with Email: ${emailPrefix}@karunya.edu.in`);
  };

  return (
    <div className="signin-container">
      <img src="/uxie-logo.png" alt="Uxie Logo" className="logo" />
      <h1>Uxie</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={emailPrefix}
            onChange={(e) => setEmailPrefix(e.target.value)}
            required
          />
          <span>@karunya.edu.in</span>
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="signup-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
      <footer>
        &copy; 2024 Uxie. Built for Karunya University
      </footer>
    </div>
  );
}

export default Signin;
