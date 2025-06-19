// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Men from './pages/Men';
import Women from './pages/Women';
import Accessories from './pages/Accessories';
import Collections from './pages/Collections';
import Footer from './components/Footer';

// Layout Components
import Header from './components/Header';
//import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/collections" element={<Collections />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
