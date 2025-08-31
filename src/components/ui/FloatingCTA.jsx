import React, { useState, useEffect } from 'react';
import Button from './Button';

const FloatingCTA = ({ onTrialClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const signupSection = document.getElementById('signup');
      
      if (heroSection && signupSection) {
        const heroBottom = heroSection?.offsetTop + heroSection?.offsetHeight;
        const signupTop = signupSection?.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Show when past hero section but before signup section
        const shouldShow = window.scrollY > heroBottom && scrollPosition < signupTop + 200;
        setIsVisible(shouldShow && !isModalOpen);
      }
    };

    // Listen for modal state changes
    const handleModalChange = () => {
      const modal = document.getElementById('signup-modal');
      const modalIsOpen = modal && modal?.style?.display === 'flex';
      setIsModalOpen(modalIsOpen);
    };

    // Check modal state periodically
    const modalCheckInterval = setInterval(handleModalChange, 100);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(modalCheckInterval);
    };
  }, [isModalOpen]);

  const handleClick = () => {
    if (onTrialClick) {
      onTrialClick();
    } else {
      const signupModal = document.getElementById('signup-modal');
      if (signupModal) {
        signupModal.style.display = 'flex';
      }
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop - Bottom Right */}
      <div className="hidden md:block fixed bottom-6 right-6 z-floating-cta animation-float-up">
        <Button
          variant="default"
          onClick={handleClick}
          className="btn-cta px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-250"
        >
          Start Free Trial
        </Button>
      </div>

      {/* Mobile - Bottom Fixed */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-floating-cta bg-background border-t border-border p-4 pb-safe-bottom animation-float-up">
        <Button
          variant="default"
          onClick={handleClick}
          className="btn-cta w-full py-3 text-lg font-semibold"
          fullWidth
        >
          Start Free Trial
        </Button>
      </div>
    </>
  );
};

export default FloatingCTA;