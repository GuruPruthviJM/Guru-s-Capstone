import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, logout } from "../../redux/signUp/logIn/logInActions";
import "../../CSS/SignUp/LogIn.css";

const Dropdown = ({ selectedRole, setSelectedRole }) => {
  const roles = ["Customers", "Employees", "Managers", "Admins", "Authorizers"];

  return (
    <div className="mb-3">
      <label className="form-label">Select a role:</label>
      <select
        className="form-control"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        required
      >
        <option value="" disabled>-- Select Role --</option>
        {roles.map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
      </select>
      {selectedRole && <p className="mt-2">Selected Role: {selectedRole}</p>}
    </div>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const existingSession = sessionStorage.getItem("user");

  // ✅ Handle redirection after successful login
  useEffect(() => {
    if (user) {
      navigate(`/${selectedRole.toLowerCase()}`);
    }else{
      navigate("/login")
    }
  }, [user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (existingSession) {
      alert("Please logout from the previous session.");
      return;
    }
    dispatch(loginUser(username, password, selectedRole));
  };

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="login-card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>

        {existingSession ? (
          <div className="text-center">
            <p className="text-danger">You are already logged in. Please logout first.</p>
            <button className="btn btn-warning w-100" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <Dropdown selectedRole={selectedRole} setSelectedRole={setSelectedRole} />

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            {error && <p className="text-danger mt-2">{error}</p>}

            <div className="text-center mt-3">
              <a
                href="#"
                className="text-decoration-none"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/reset");
                }}
              >
                Forgot Password?
              </a>
              <span className="mx-2">|</span>
              <a
                href="#"
                className="text-decoration-none"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signup");
                }}
              >
                Sign Up
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
