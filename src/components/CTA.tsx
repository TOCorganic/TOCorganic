import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTA: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience <span className="text-yellow-400">Ceylon?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of satisfied customers who have discovered the authentic taste of Sri Lankan natural food products. 
            Experience the perfect blend of tradition and health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <span>Browse Catalog</span>
              <ArrowRight size={20} />
            </button>
            
            <button
              onClick={scrollToContact}
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all duration-300"
            >
              <Phone size={20} />
              <span>Contact Us</span>
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-gray-300">Natural Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-400">1000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-400">8+</div>
              <div className="text-gray-300">Premium Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;