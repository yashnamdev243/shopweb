// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Products from "./pages/Products";
// // import Contact from "./pages/Contact";
// // import NotFound from "./pages/NotFound";
// // import Footer from "./components/Footer";
// import Header from "./Component/Header";

// function App() {
//   return (
//     <Router>
//           <div className="min-h-screen flex flex-col">

//       <Header />
//       <main className="flex-grow">
//         <Routes>
//           {/* <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} /> */}
//           {/* <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </main>
//       {/* <Footer /> */}
//           </div>

//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./pages/Home";
import FloatingIcons from "./Component/FloatingIcons";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
