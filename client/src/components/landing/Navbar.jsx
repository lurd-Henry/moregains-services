import { Link } from “react-router-dom”;
import { Menu, ArrowUpRight } from “lucide-react”;
import { useState } from “react”;

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return (
M
moregains.
  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
    <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
    <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
  </div>
  <div className="nav-actions">
    <Link to="/login" className="nav-login">Log In</Link>
    <Link to="/register" className="btn btn-primary nav-cta">
      Get Started <ArrowUpRight size={16} />
    </Link>
  </div>
  <button
    className="mobile-menu"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
  >
    <Menu />
  </button>
</nav>

);
}

export default Navbar;
