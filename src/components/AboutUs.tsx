import React from 'react';
import { Users, Heart, Globe, Award, Leaf, Target } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            About <span className="text-yellow-400">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the passion and dedication behind Taste of Ceylon's journey to bring you the finest Sri Lankan natural food products
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Our Team</h3>
                  <p className="text-gray-600">Passionate food artisans</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our dedicated team combines generations of Sri Lankan culinary wisdom with modern food science to create exceptional products that honor our heritage while meeting contemporary quality standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">Our Values</h3>
                  <p className="text-gray-600">Health, tradition, and quality</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We believe in the power of natural ingredients and traditional Ayurvedic principles. Every product we create is a testament to our commitment to your health and well-being.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-6xl mb-6">🏭</div>
              <h3 className="text-3xl font-bold text-black mb-4">Our Facility</h3>
              <p className="text-gray-600 mb-6">
                State-of-the-art manufacturing facility in the heart of Sri Lanka, where tradition meets modern technology.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-600">2020</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-600">100%</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">Global Vision</h4>
            <p className="text-gray-600">
              Bringing authentic Sri Lankan flavors to tables around the world while preserving our cultural heritage.
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">Sustainability</h4>
            <p className="text-gray-600">
              Committed to environmentally friendly practices and supporting local farmers and communities.
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">Innovation</h4>
            <p className="text-gray-600">
              Continuously improving our processes and products while staying true to traditional recipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;