import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../../CSS/SignUp/LogIn.css';

const Dropdown = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const roles = ["Customer", "Employee", "Manager", "Admin", "Authorizer"];

  return (
    <div className="mb-3">
      <label className="form-label">Select a role:</label>
      <select className="form-control" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} required>
        <option value="" disabled>-- Select Role --</option>
        {roles.map((role, index) => (
          <option key={index} value={role}>{role}</option>
        ))}
      </select>
      {selectedRole && <p className="mt-2">Selected Role: {selectedRole}</p>}
    </div>
  );
};

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="login-card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form method="post">
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="username" className="form-label me-2">Username</label>
            <input type="text" className="form-control flex-grow-1" id="username" placeholder="Enter your username" required />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="password" className="form-label me-2">Password</label>
            <input type="password" className="form-control flex-grow-1" id="password" placeholder="Enter your password" required />
          </div>
          <Dropdown />
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none" onClick={(e) => { 
              e.preventDefault(); 
              navigate("/reset"); 
            }}>Forgot Password?</a>
            <span className="mx-2">|</span>
            {/* Redirect to the Signup page on click */}
            <a href="#" className="text-decoration-none" onClick={(e) => { 
              e.preventDefault(); 
              navigate("/signup"); 
            }}>
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
