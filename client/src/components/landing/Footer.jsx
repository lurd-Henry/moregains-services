import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            M
            <span>moregains.</span>
          </div>
          <p>
            Empowering business owners with financial opportunities
            designed to support growth.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#benefits">Our Benefits</a>
            <a href="#how-it-works">How It Works</a>
          </div>
          <div>
            <h4>Account</h4>
            <Link to="/login">Log In</Link>
            <Link to="/register">Get Started</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Moregains Services.</span>
        <span>Empowering Businesses. Financing Growth.</span>
      </div>
    </footer>
  );
}
export default Footer;
