import React, { useState } from 'react';
import "./SignUp.css"; 

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    registerNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Account created", form);
    // Replace with API call
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <div className="logo">
          <div className="logo-circle">U</div>
          <h1>Uxie</h1>
          <p className="subtitle">Coding Platform Authentication</p>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <p className="subtext">Join the Uxie coding community</p>

          <label>Username</label>
          <input type="text" name="username" placeholder="Enter your username" onChange={handleChange} required />

          <label>Register Number</label>
          <input type="text" name="registerNumber" placeholder="Enter your register number" onChange={handleChange} required />

          <label>Email</label>
          <div className="email-field">
            <input type="text" name="email" placeholder="username" onChange={handleChange} required />
            <span>@karunya.edu.in</span>
          </div>

          <label>Password</label>
          <input type="password" name="password" placeholder="Create a password" onChange={handleChange} required />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm your password" onChange={handleChange} required />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
