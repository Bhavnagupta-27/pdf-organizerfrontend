import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <p className="hero-tag">Powered by AI · OCR · NLP</p>

      <h1>
        Let AI organize your PDFs.
        <br />
        <span>Find anything in seconds.</span>
      </h1>

      <p className="hero-description">
        SmartPDF AI automatically understands, organizes and searches
        all your PDFs using AI — so you can find exactly what you need,
        when you need it.
      </p>

      <div className="hero-buttons">
        <button>Start for Free</button>
        <button className="secondary-btn">View Demo Dashboard</button>
      </div>

      <p className="import-text">
        Import from WhatsApp · Email · Browser · Manual Upload
      </p>

    </section>
  );
}

export default Hero;