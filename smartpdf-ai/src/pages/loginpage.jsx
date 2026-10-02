import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function LoginPage() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login
    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>SmartPDF AI</h1>

        <h2>
          {isSignup ? "Create your account" : "Welcome back"}
        </h2>

        <p>
          {isSignup
            ? "Create an account to organize your PDFs."
            : "Login to continue to your PDF workspace."}
        </p>

        <form onSubmit={handleSubmit}>

          {isSignup && (
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            {isSignup ? "Create Account" : "Log In"}
          </button>

        </form>

        <div className="switch-login">
          <span>
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}
          </span>

          <button
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </div>

      </div>

    </div>
  );
}

export default LoginPage;