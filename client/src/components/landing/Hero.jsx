import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

function Hero() {
return (
Financing opportunities for growing businesses
    <h1>
      Your business deserves
      <span> room to grow.</span>
    </h1>
    <p className="hero-description">
      Access convenient financing solutions designed for entrepreneurs
      and business owners. Take the next step towards building the
      business you've always envisioned.
    </p>
    <div className="hero-actions">
      <Link to="/register" className="btn btn-primary">
        Apply for a Loan <ArrowRight size={18} />
      </Link>
      <a href="#how-it-works" className="btn btn-outline">
        Explore More
      </a>
    </div>
    <div className="hero-trust">
      <div><ShieldCheck size={18} /> Structured application process</div>
      <div><TrendingUp size={18} /> Business growth focused</div>
    </div>
  </div>
  <div className="hero-visual">
    <div className="hero-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000"
        alt="Business owner managing a retail business"
      />
      <div className="floating-card">
        <div className="floating-icon">↗</div>
        <div>
          <strong>Grow with confidence</strong>
          <span>Supporting your business journey</span>
        </div>
      </div>
    </div>
    <div className="hero-decoration"></div>
  </div>
</section>

);
}

export default Hero;
