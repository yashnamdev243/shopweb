import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
