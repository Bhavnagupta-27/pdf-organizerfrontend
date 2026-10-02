import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          Powered by AI · OCR · NLP
        </div>

        <h1>
          Let AI organize your PDFs.
        </h1>

        <h2>
          Find anything in seconds.
        </h2>

        <p>
          SmartPDF AI automatically organizes, categorizes and extracts
          information from your PDFs using Artificial Intelligence.
        </p>

        <div className="hero-buttons">

          <button
            className="start-btn"
            onClick={() => navigate("/login")}
          >
            Start for Free →
          </button>

          <button
            className="demo-btn"
            onClick={() => navigate("/dashboard")}
          >
            View Demo Dashboard
          </button>

        </div>

        <div className="hero-sources">
          <span>Import from</span>
          <span>WhatsApp</span>
          <span>Email</span>
          <span>Browser</span>
          <span>Manual Upload</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;