import React from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface HeaderProps {
  onStoryClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStoryClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToQuality = () => {
    const element = document.getElementById('quality');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleStoryClick = () => {
    onStoryClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black text-white py-4 px-6 fixed top-0 w-full z-30 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/TOC (4).png" 
            alt="Taste of Ceylon Logo" 
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-2xl font-bold text-yellow-400">Taste of Ceylon</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={scrollToProducts}
            className="hover:text-yellow-400 transition-colors"
          >
            Products
          </button>
          <button 
            onClick={scrollToAbout}
            className="hover:text-yellow-400 transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={scrollToQuality}
            className="hover:text-yellow-400 transition-colors"
          >
            Quality Standards
          </button>
          <button 
            onClick={handleStoryClick}
            className="hover:text-yellow-400 transition-colors"
          >
            Our Story
          </button>
          <button 
            onClick={scrollToContact}
            className="hover:text-yellow-400 transition-colors"
          >
            Contact
          </button>
        </nav>

        <button 
          className="md:hidden text-white hover:text-yellow-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="px-6 py-4 space-y-4">
            <button 
              onClick={scrollToProducts}
              className="block w-full text-left hover:text-yellow-400 transition-colors py-2"
            >
              Products
            </button>
            <button 
              onClick={scrollToAbout}
              className="block w-full text-left hover:text-yellow-400 transition-colors py-2"
            >
              About Us
            </button>
            <button 
              onClick={scrollToQuality}
              className="block w-full text-left hover:text-yellow-400 transition-colors py-2"
            >
              Quality Standards
            </button>
            <button 
              onClick={handleStoryClick}
              className="block w-full text-left hover:text-yellow-400 transition-colors py-2"
            >
              Our Story
            </button>
            <button 
              onClick={scrollToContact}
              className="block w-full text-left hover:text-yellow-400 transition-colors py-2"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;