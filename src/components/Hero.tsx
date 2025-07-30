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
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-black mb-2">Natural & Pure</h3>
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