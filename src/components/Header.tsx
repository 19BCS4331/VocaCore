import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import ThemeToggle from './shared/ThemeToggle';
import { useTheme } from '../hooks/useTheme';
import Button from './shared/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `${theme === 'dark' ? 'bg-gray-900/95 shadow-lg shadow-purple-900/10' : 'bg-white/95 shadow-lg shadow-purple-300/20'}`
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Phone className={`h-8 w-8 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
            <span className="ml-2 text-xl font-bold">AI Caller</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-sm font-medium hover:text-purple-500 transition-colors">How It Works</a>
            <a href="#industries" className="text-sm font-medium hover:text-purple-500 transition-colors">Industries</a>
            <a href="#demo" className="text-sm font-medium hover:text-purple-500 transition-colors">Demo</a>
            <a href="#pricing" className="text-sm font-medium hover:text-purple-500 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium hover:text-purple-500 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button href="#book-demo" variant="primary" size="sm" className="hidden md:block">
              Book a Demo
            </Button>
            <button
              className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#industries" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </a>
            <a 
              href="#demo" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="px-3 py-2">
              <Button href="#book-demo" variant="primary" size="sm" fullWidth onClick={() => setIsMenuOpen(false)}>
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;