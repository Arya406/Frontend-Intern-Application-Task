import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import SectionProgressIndicator from '../../components/ui/SectionProgressIndicator';
import ConversionModal from '../../components/ui/ConversionModal';
import FloatingCTA from '../../components/ui/FloatingCTA';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import InteractiveDemoSection from './components/InteractiveDemoSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import { Instagram, Youtube, Twitter } from "lucide-react"; // for icons (X = Twitter)

const LandingPage = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    // Create signup modal element for global access
    const modalElement = document.createElement('div');
    modalElement.id = 'signup-modal';
    modalElement.style.display = 'none';
    document.body?.appendChild(modalElement);

    // Check for modal state changes
    const checkModalState = () => {
      const modal = document.getElementById('signup-modal');
      if (modal) {
        const isOpen = modal?.style?.display === 'flex';
        setIsSignupModalOpen(isOpen);
      }
    };

    const interval = setInterval(checkModalState, 100);

    return () => {
      clearInterval(interval);
      const modal = document.getElementById('signup-modal');
      if (modal) {
        modal?.remove();
      }
    };
  }, []);

  const handleTrialClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleDemoClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseSignupModal = () => {
    setIsSignupModalOpen(false);
    const modal = document.getElementById('signup-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection 
          onTrialClick={handleTrialClick}
          onDemoClick={handleDemoClick}
        />

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Section */}
        <SolutionSection />

        {/* Interactive Demo Section */}
        <InteractiveDemoSection onDemoClick={handleDemoClick} />

        {/* Success Stories Section */}
        <SuccessStoriesSection />

       

      

      

      
      </main>
      {/* Footer */}
      <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
        
        {/* Left - Logo & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow">
            
          </div>
          <div>
            <p className="font-semibold text-gray-900">Topmind Care</p>
            <p className="text-xs text-gray-500">
              Mindfulness for growing minds. © 2025 Mindery Kids.
            </p>
          </div>
        </div>

        {/* Middle - Contact */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
          <p className="text-gray-900 font-medium">Contact</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="text-purple-600 hover:underline flex items-center gap-1"
            >
              <Instagram size={16} /> Instagram
            </a>
            <a
              href="#"
              className="text-purple-600 hover:underline flex items-center gap-1"
            >
              <Youtube size={16} /> YouTube
            </a>
            <a
              href="#"
              className="text-purple-600 hover:underline flex items-center gap-1"
            >
              <Twitter size={16} /> X
            </a>
          </div>
        </div>

        {/* Right - Legal */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
          <p className="text-gray-900 font-medium">Legal</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="text-purple-600 hover:underline">
              Privacy
            </a>
            <a href="#" className="text-purple-600 hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
    
      {/* Modals */}
      <ConversionModal 
        isOpen={isSignupModalOpen} 
        onClose={handleCloseSignupModal} 
      />
    
    </div>
  );
};

export default LandingPage;