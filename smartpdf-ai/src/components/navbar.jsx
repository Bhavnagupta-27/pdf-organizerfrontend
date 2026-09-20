import "../styles/navbar.css";
function Navbar() {
  return (
    <nav>
      <div>
        <h2>SmartPDF AI</h2>
      </div>

      <div>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <button>Log in</button>
        <button>Get Started →</button>
      </div>
    </nav>
  );
}

export default Navbar;