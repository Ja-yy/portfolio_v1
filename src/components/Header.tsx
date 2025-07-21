import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-imperial-900/90 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="relative">
              <svg
                width="22"
                height="24"
                viewBox="0 0 63 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 hover:scale-110"
              >
                <path
                  d="M62.6094 50.8906C62.6094 53.3281 62.1875 55.5938 61.3438 57.6875C60.5 59.7812 59.3125 61.5938 57.7812 63.125C56.2812 64.6562 54.4844 65.8594 52.3906 66.7344C50.2969 67.5781 48.0156 68 45.5469 68H0.875V55.8125H45.5469C47.0469 55.8125 48.2188 55.3906 49.0625 54.5469C49.9062 53.6719 50.3281 52.4531 50.3281 50.8906V0.78125H62.6094V50.8906Z"
                  className="fill-rose-300 transition-colors duration-300 hover:fill-rose-400"
                />
              </svg>
              <span className="absolute -bottom-2 left-0 w-2 h-1 bg-rose-500"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-sm text-rose-200 hover:text-rose-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-imperial-800 text-rose-300 hover:text-rose-400 hover:bg-imperial-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden w-full animate-fade-in">
          <div className="w-full px-4 pt-2 pb-4 space-y-2 bg-imperial-900/95 backdrop-blur-md border-b border-imperial-800">
            {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 font-mono text-sm text-rose-200 hover:text-rose-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
