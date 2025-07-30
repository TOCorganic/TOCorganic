import React from 'react';
import { Leaf, Award, Heart } from 'lucide-react';

interface HeroProps {
  onStoryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStoryClick }) => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Taste of
              <span className="text-yellow-400 block">Ceylon</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Authentic Sri Lankan natural food products crafted from premium tamarind with traditional Ayurvedic wisdom
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Leaf size={20} />
              <span>100% Natural</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Award size={20} />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Heart size={20} />
              <span>Ayurvedic Benefits</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Products
            </button>
            <button
              onClick={onStoryClick}
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Our Story
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-8 w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-8 left-12 w-6 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center">
              {/* Animated leaf icon */}
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-10 h-10 text-white animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                  Natural & Pure
                </span>
              </h3>
              <p className="text-gray-600">
                From the heart of Sri Lanka's finest tamarind groves
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;