import React from 'react';
import { Leaf } from 'lucide-react';

interface HeaderProps {
  onStoryClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStoryClick }) => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-black text-white py-4 px-6 fixed top-0 w-full z-30 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-black" />
          </div>
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
            onClick={onStoryClick}
            className="hover:text-yellow-400 transition-colors"
          >
            Our Story
          </button>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">
            Contact
          </a>
        </nav>

        <div className="md:hidden flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <Leaf className="w-4 h-4 text-black" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;