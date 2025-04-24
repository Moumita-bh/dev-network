import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyApps from "./pages/MyApps"; // ✅ import the component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/my-apps" element={<MyApps />} /> {/* ✅ route defined */}
      </Routes>
    </Router>
  );
}

export default App;

