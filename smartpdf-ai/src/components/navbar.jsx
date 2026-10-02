import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        SmartPDF <span>AI</span>
      </div>

      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>

        <button
          className="navbar-login"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>

        <button
          className="get-started-btn"
          onClick={() => navigate("/login")}
        >
          Get Started →
        </button>
      </div>
    </nav>
  );
}

export default Navbar;