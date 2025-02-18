import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/signUp/signIn/signInActions";
import "../../CSS/SignUp/SignUp.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.signUp);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState(""); // New username field
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agreeTerms) {
      alert("You must agree to the terms.");
      return;
    }

    dispatch(signUpUser(fullName, username, email, phoneNumber, password));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="SignUpcard p-4 shadow">
        <h2 className="h2-signupheading">Sign Up</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name:
              <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" required />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Username:
              <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Choose a username" required />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Email:
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number:
              <input type="tel" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" required />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Password:
              <div className="password-container">
                <input type={showPassword ? "text" : "password"} className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required />
                <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password:
              <div className="password-container">
                <input type={showConfirmPassword ? "text" : "password"} className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required />
                <span className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </label>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="terms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} required />
            <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
