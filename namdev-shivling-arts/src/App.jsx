
// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FloatingIcons from "./component/FloatingIcons"
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8f3] font-sans scroll-smooth">
      {/* Header Navigation */}
      <Header />
      <FloatingIcons />
      {/* Main Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer /> 
    </div>
  );
}

export default App;
