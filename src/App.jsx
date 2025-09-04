import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import PopupContactForm from './components/PopupContactForm';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import Products from './pages/Products';
import Offers from './pages/Offers';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  // Scroll to top on route change
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
  }
  const [showSplash, setShowSplash] = useState(true); // Re-enabled splash screen
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds once splash is complete
    const timer = setTimeout(() => {
      if (!showSplash) {
        setShowPopup(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [showSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <PopupContactForm isOpen={showPopup} onClose={handleClosePopup} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
