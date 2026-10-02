import Navbar from "../components/navbar";
import Hero from "../components/hero";
import DashboardPreview from "../components/Dashboardpreview";
import "../styles/landingpage.css";

function LandingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <DashboardPreview />

      {/* Features */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <p>POWERFUL FEATURES</p>
          <h2>Everything you need to manage PDFs</h2>
          <span>
            SmartPDF AI uses AI to organize, understand and search your
            documents effortlessly.
          </span>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Categorization</h3>
            <p>
              Automatically organize your PDFs into meaningful categories
              using AI.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>OCR Text Extraction</h3>
            <p>
              Extract useful text from scanned documents and image-based PDFs.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Smart Search</h3>
            <p>
              Find the information you need quickly with intelligent search.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3>Auto Renaming</h3>
            <p>
              Give your documents meaningful names automatically with AI.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📁</div>
            <h3>Smart Organization</h3>
            <p>
              Keep your entire PDF collection clean, structured and easy to
              access.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Privacy First</h3>
            <p>
              Your documents stay protected while you work with your files.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <p>HOW IT WORKS</p>
          <h2>Organize your PDFs in four simple steps</h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Import</h3>
            <p>Upload your PDFs from your device or other sources.</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Analyze</h3>
            <p>AI reads and understands the content of your documents.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Categorize</h3>
            <p>Your documents are automatically organized into categories.</p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>
            <h3>Search</h3>
            <p>Find the exact document or information you need instantly.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to organize your PDFs?</h2>
        <p>
          Let SmartPDF AI handle the organization so you can focus on what
          matters.
        </p>

        <button onClick={() => (window.location.href = "/login")}>
          Get Started Free →
        </button>
      </section>
    </>
  );
}

export default LandingPage;