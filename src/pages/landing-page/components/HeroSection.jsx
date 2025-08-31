import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = ({ onTrialClick, onDemoClick }) => {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animate counter
    const targetCount = 50000;
    const duration = 2000;
    const increment = targetCount / (duration / 50);

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setAnimatedCount(targetCount);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(currentCount));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const universityLogos = [
    { name: "Stanford University", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&fit=crop&crop=center" },
    { name: "MIT", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=60&fit=crop&crop=center" },
    { name: "Harvard", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=60&fit=crop&crop=center" },
    { name: "Yale", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&fit=crop&crop=center" }
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232563EB%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animation-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-1.5 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
              🌈 Calm Minds, Happy Hearts
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Mindfulness & Meditation for Kids (4–14)
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 max-w-xl">
              Fun, story-based meditations that build focus, kindness, and confidence.
              Safe, ad-free, and crafted with child-development experts.
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onTrialClick}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
              >
                Start Free Trial
              </button>

              <button
                onClick={onDemoClick}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
              >
                Explore Programs
              </button>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="px-4 py-3 bg-white rounded-xl shadow-md flex items-center gap-3">
                {/* Brain Emoji */}
                <div className="text-2xl">🧠</div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">Improves</span>
                  <span className="font-semibold text-gray-800">Focus</span>
                </div>
              </div>
              {/* Reduces Stress Card */}
              <div className="px-4 py-3 bg-white rounded-xl shadow-md flex items-center gap-3">
                <div className="text-2xl">😌</div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">Reduces</span>
                  <span className="font-semibold text-gray-800">Stress</span>
                </div>
              </div>
              {/* Better Sleep Card */}
              <div className="px-4 py-3 bg-white rounded-xl shadow-md flex items-center gap-3">
                <div className="text-2xl">😴</div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">Better</span>
                  <span className="font-semibold text-gray-800">Sleep</span>
                </div>
              </div>
              {/* Builds Empathy Card */}
              <div className="px-4 py-3 bg-white rounded-xl shadow-md flex items-center gap-3">
                <div className="text-2xl">❤️</div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">Builds</span>
                  <span className="font-semibold text-gray-800">Empathy</span>
                </div>
              </div>
            </div>

            {/* Trust Bar */}


            {/* University Partnerships */}

          </div>

          {/* Right Column - Visual */}
          <div className={`relative ${isVisible ? 'animation-float-up' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 h-[35rem] rounded-3xl flex items-center justify-center p-8 shadow-md">
                  {/* Placeholder for Illustration */}
                  <span className="text-gray-400">[ Illustration ]</span>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">

                      <span className="font-semibold"></span>
                    </div>
                    <p className="text-sm opacity-90">

                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-[22rem] -left-8 bg-white rounded-2xl shadow-lg p-4 w-64 transform -rotate-6">
                <h3 className="font-semibold text-gray-800 mb-2">Today's Journey</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>🐉 Dragon Breath (3 min)</li>
                  <li>🦋 Butterfly Body Scan (5 min)</li>
                  <li>🌙 Sleep Story: Star Boat (7 min)</li>
                </ul>
              </div>




            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;