import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingpage";
import LoginPage from "./pages/loginpage";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login / Sign Up */}
        <Route path="/login" element={<LoginPage />} />

        {/* Actual Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;