import React from 'react';
import { Leaf, Heart, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Taste of Ceylon</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bringing you the finest Sri Lankan natural food products crafted from premium tamarind 
              with traditional Ayurvedic wisdom and modern quality standards.
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Leaf size={16} />
                <span className="text-sm">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Heart size={16} />
                <span className="text-sm">Ayurvedic</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Award size={16} />
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('quality')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors text-left"
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>No. 192, 2 Canal, Hadungamuwa</p>
              <p>Matale - Sri Lanka</p>
              <p>+94 77 712 8439</p>
              <p>+94 75 812 8439</p>
              <p>
                <a 
                  href="mailto:tasteofceylon01@gmail.com" 
                  className="hover:text-yellow-400 transition-colors"
                >
                  tasteofceylon01@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Taste of Ceylon - by <a href="https://scrollloop.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">Scrollloop.com</a>. All rights reserved. | Manufactured in Sri Lanka.
          </p>
        </div>
      </div>
    </footer>
  )
  );
};

export default Footer;