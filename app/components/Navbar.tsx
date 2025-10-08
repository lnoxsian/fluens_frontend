'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small delay for visual feedback
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 150);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Technology', id: 'technology' },
    { label: 'Research', id: 'research' },
    { label: 'Prototype', id: 'prototype' },
    { label: 'Impact', id: 'impact' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <h1 className={`text-2xl font-bold transition-all duration-500 ease-out ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              FLUENS
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-500 ease-out transform hover:scale-110 hover:text-blue-400 active:scale-95 relative group ${
                  isScrolled ? 'text-gray-300' : 'text-white/90'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className={`p-2 rounded-md transition-all duration-300 transform hover:scale-110 active:scale-95 ${
              isScrolled ? 'text-gray-300' : 'text-white'
            }`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}