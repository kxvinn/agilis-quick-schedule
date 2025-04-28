
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-agilis-dark dark:text-white">
              Agilis<span className="text-agilis-accent">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-agilis-dark dark:text-gray-200 hover:text-agilis-accent transition-colors">
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-agilis-dark dark:text-gray-200 hover:text-agilis-accent transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-agilis-dark dark:text-gray-200 hover:text-agilis-accent transition-colors"
            >
              How It Works
            </button>
            <Link to="/login">
              <Button variant="ghost" className="text-agilis-dark dark:text-gray-200 hover:text-agilis-accent">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-agilis-accent text-white hover:bg-agilis-accent/90 btn-hover">
                Sign up free
              </Button>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="text-agilis-dark dark:text-gray-200 p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-agilis-dark dark:text-gray-200 hover:text-agilis-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-agilis-dark dark:text-gray-200 hover:text-agilis-accent transition-colors py-2 text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-agilis-dark dark:text-gray-200 hover:text-agilis-accent transition-colors py-2 text-left"
              >
                How It Works
              </button>
              <Link 
                to="/login" 
                className="text-agilis-dark dark:text-gray-200 hover:text-agilis-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="block w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="bg-agilis-accent text-white hover:bg-agilis-accent/90 w-full">
                  Sign up free
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
