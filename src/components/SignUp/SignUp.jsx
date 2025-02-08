import { useState } from "react";
import '../../CSS/SignUp/SignUp.css'; // Import the CSS file

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Sign Up Successful!\nName: ${fullName}\nEmail: ${email}`);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="SignUpcard p-4 shadow">
        <h2  className="h2-signupheading">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name:
              <input
                type="text" 
                className="form-control"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Email:
              <input
                type="email" 
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Password:
              <input
                type="password" 
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password:
              <input
                type="password" 
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox" 
              className="form-check-input"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
            />
            <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
