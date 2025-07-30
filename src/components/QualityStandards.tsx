import React from 'react';
import { Shield, CheckCircle, Award, Microscope, Leaf, Heart } from 'lucide-react';

const QualityStandards: React.FC = () => {
  const standards = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Food Safety Certification",
      description: "All our products meet international food safety standards and regulations",
      features: ["HACCP Certified", "ISO 22000 Compliant", "Regular Audits"]
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Laboratory Testing",
      description: "Rigorous testing at every stage of production ensures consistent quality",
      features: ["Microbiological Testing", "Chemical Analysis", "Nutritional Verification"]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural Ingredients",
      description: "100% natural ingredients sourced from certified organic farms",
      features: ["No Artificial Colors", "No Preservatives", "No Chemical Additives"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ayurvedic Standards",
      description: "Traditional Ayurvedic principles guide our formulation process",
      features: ["Ancient Wisdom", "Modern Science", "Health Benefits"]
    }
  ];

  const certifications = [
    { name: "ISO 22000", description: "Food Safety Management" },
    { name: "HACCP", description: "Hazard Analysis Critical Control Points" },
    { name: "GMP", description: "Good Manufacturing Practices" },
    { name: "Organic", description: "Certified Organic Ingredients" }
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Quality <span className="text-yellow-400">Standards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our unwavering commitment to excellence ensures every product meets the highest quality and safety standards
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {standards.map((standard, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="bg-yellow-400 p-4 rounded-xl text-black flex-shrink-0">
                  {standard.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3">{standard.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{standard.description}</p>
                  <ul className="space-y-2">
                    {standard.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Certifications</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We maintain the highest industry certifications to ensure our products meet global quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2">Coming Soon</h4>
                <p className="text-gray-300 text-sm">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-yellow-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Quality Assurance Process</h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Our comprehensive quality assurance process ensures every product that reaches you meets our exacting standards
            </p>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Raw Material Inspection", desc: "Quality check of all incoming ingredients" },
                { step: "2", title: "Production Monitoring", desc: "Continuous monitoring during manufacturing" },
                { step: "3", title: "Laboratory Testing", desc: "Comprehensive testing of finished products" },
                { step: "4", title: "Packaging Quality", desc: "Ensuring proper packaging and labeling" },
                { step: "5", title: "Final Approval", desc: "Final quality approval before distribution" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 text-black font-bold text-lg">
                    {process.step}
                  </div>
                  <h4 className="font-semibold text-black mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;