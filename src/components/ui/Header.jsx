import React, { useState, useEffect } from "react";
import Button from "./Button";
import Icon from "../AppIcon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDemoClick = () => {
    const demoSection = document.getElementById("demo-section");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTrialClick = () => {
    const signupModal = document.getElementById("signup-modal");
    if (signupModal) {
      signupModal.style.display = "flex";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow">
              
            </div>
            <span className="text-xl font-bold text-black">Topmind Care</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#Why"
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
            >
              Why
            </a>
            <a
              href="#programs"
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
            >
              Programs
            </a>
            <a
              href="#features"
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#parents"
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
            >
              For Parents
            </a>
            <a
              href="#faq"
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
            >
              FAQ
            </a>

            <button
              onClick={handleTrialClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all"
            >
              Start Free
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              <Icon name={showMobileMenu ? "X" : "Menu"} size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t border-gray-200 animate-fadeIn">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a
              href="#why"
              onClick={() => setShowMobileMenu(false)}
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              Why
            </a>
            <a
              href="#programs"
              onClick={() => setShowMobileMenu(false)}
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              Programs
            </a>
            <a
              href="#features"
              onClick={() => setShowMobileMenu(false)}
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              Features
            </a>
            <a
              href="#parents"
              onClick={() => setShowMobileMenu(false)}
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              For Parents
            </a>
            <a
              href="#faq"
              onClick={() => setShowMobileMenu(false)}
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              FAQ
            </a>

            <div className="px-3 pt-2">
              <Button
                variant="default"
                onClick={() => {
                  handleTrialClick();
                  setShowMobileMenu(false);
                }}
                className="btn-cta w-full font-semibold"
                fullWidth
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
