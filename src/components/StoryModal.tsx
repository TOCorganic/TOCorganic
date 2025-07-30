import React from 'react';
import { X, Leaf, Award, Heart, Users } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-black to-gray-900 text-white p-8 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors"
          >
            <X size={28} />
          </button>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-black" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-yellow-400">Our Story</h2>
              <p className="text-gray-300">Taste of Ceylon</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Hero Image Placeholder */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-8 mb-8 text-center">
            <div className="text-6xl mb-4">🌿</div>
            <h3 className="text-2xl font-bold text-black mb-2">From Sri Lanka's Heart</h3>
            <p className="text-gray-800">Premium tamarind products with traditional wisdom</p>
          </div>

          {/* Story Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-black mb-3 flex items-center">
                <Award className="w-6 h-6 text-yellow-400 mr-2" />
                Our Heritage
              </h4>
              <p className="mb-4">
                Taste of Ceylon is a Sri Lankan company that produces high-quality sauces and food flavorings from naturally grown tamarind.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-black mb-3 flex items-center">
                <Heart className="w-6 h-6 text-yellow-400 mr-2" />
                Our Process
              </h4>
              <p className="mb-4">
                By integrating modern technology with this tamarind, which is self-sufficient in Ayurvedic properties, we create healthy and environmentally friendly products that are free from artificial flavors, colors, or preservatives.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-black mb-3 flex items-center">
                <Users className="w-6 h-6 text-yellow-400 mr-2" />
                Our Mission
              </h4>
              <p className="mb-4">
                Our aim is to introduce a range of tamarind-based products, offering you a medicinal food instead of medicine, to provide a natural taste for a healthy life.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-black" />
              </div>
              <h5 className="font-bold text-black mb-2">100% Natural</h5>
              <p className="text-sm text-gray-600">No artificial additives or preservatives</p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <h5 className="font-bold text-black mb-2">Ayurvedic Benefits</h5>
              <p className="text-sm text-gray-600">Traditional healing properties</p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h5 className="font-bold text-black mb-2">Premium Quality</h5>
              <p className="text-sm text-gray-600">Carefully crafted with modern technology</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="bg-black hover:bg-yellow-400 hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;