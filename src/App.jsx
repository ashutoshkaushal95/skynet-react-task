import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AccessibilityCheckerPage from "./pages/AccessibilityCheckerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checker" element={<AccessibilityCheckerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
