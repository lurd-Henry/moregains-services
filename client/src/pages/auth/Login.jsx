import { useState } from "react";
import { Link } from "react-router-dom";
import {
ArrowLeft,
Eye,
EyeOff,
LockKeyhole,
Mail,
ShieldCheck
} from "lucide-react";

function Login() {
const [showPassword, setShowPassword] = useState(false);
const [formData, setFormData] = useState({
email: "",
password: "",
rememberMe: false
});

const handleChange = (e) => {
const { name, value, checked, type } = e.target;

setFormData({
  ...formData,
  [name]: type === "checkbox" ? checked : value
});

};

const handleSubmit = (e) => {
e.preventDefault();

console.log("Login form:", formData);
alert("Authentication will be connected to the Moregains API soon.");

};

return (
  <div className="auth-visual">
    <Link to="/" className="brand auth-brand">
      <span className="brand-icon">M</span>
      <span>moregains<span className="brand-dot">.</span></span>
    </Link>
    <div className="auth-visual-content">
      <span className="eyebrow">MOREGAINS SERVICES</span>
      <h1>
        Every great business
        starts with an
        <span> opportunity.</span>
      </h1>
      <p>
        Your business journey matters. We're here to help
        you access financial opportunities and take your
        next big step.
      </p>
      <div className="auth-visual-note">
        <ShieldCheck size={20} />
        <span>Building opportunities for growing businesses.</span>
      </div>
    </div>
    <div className="auth-visual-footer">
      © {new Date().getFullYear()} Moregains Services
    </div>
  </div>
  <div className="auth-form-section">
    <Link to="/" className="back-home">
      <ArrowLeft size={16} /> Back to home
    </Link>
    <div className="auth-form-container">
      <div className="auth-mobile-brand">
        <span className="brand-icon">M</span>
        <span>moregains<span className="brand-dot">.</span></span>
      </div>
      <span className="eyebrow">WELCOME BACK</span>
      <h2>Sign in to your account</h2>
      <p className="auth-subtitle">
        Enter your details to access your Moregains account.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <div className="input-wrapper">
            <Mail size={18} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="password-label">
            <label htmlFor="password">Password</label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <div className="input-wrapper">
            <LockKeyhole size={18} />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <label className="remember-option">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <span>Remember me</span>
        </label>
        <button type="submit" className="btn btn-primary auth-submit">
          Sign In
        </button>
      </form>
      <div className="auth-divider">
        <span>NEW TO MOREGAINS?</span>
      </div>
      <p className="auth-register">
        Don't have an account?
        <Link to="/register"> Create one</Link>
      </p>
      <div className="auth-security">
        <ShieldCheck size={16} />
        Your account security matters to us.
      </div>
    </div>
  </div>
</div>

);
}

export default Login;
