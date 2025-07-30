import React from 'react';
import { Droplets, Zap, Flame, Cherry, Apple, Citrus, Plus } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Healthy Booster",
      description: "A refreshing tamarind drink packed with natural vitamins and Ayurvedic benefits",
      icon: <Droplets className="w-8 h-8" />,
      benefits: ["Rich in Vitamin C", "Natural Antioxidants", "Digestive Health"],
      price: "LKR 450"
    },
    {
      id: 2,
      name: "Tamarind Sauce",
      description: "Classic tamarind sauce with authentic Sri Lankan flavors",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["No Preservatives", "Traditional Recipe", "Versatile Use"],
      price: "LKR 320"
    },
    {
      id: 3,
      name: "Tamarind Black Pepper Sauce",
      description: "Spicy blend of tamarind and premium black pepper for bold flavors",
      icon: <Flame className="w-8 h-8" />,
      benefits: ["Metabolism Boost", "Anti-inflammatory", "Bold Flavor"],
      price: "LKR 380"
    },
    {
      id: 4,
      name: "Naimiris Tamarind Sauce",
      description: "Premium tamarind sauce with unique Naimiris blend",
      icon: <Cherry className="w-8 h-8" />,
      benefits: ["Premium Quality", "Unique Blend", "Gourmet Taste"],
      price: "LKR 420"
    },
    {
      id: 5,
      name: "Naimiris Jam (Red)",
      description: "Sweet and tangy red jam made from finest tamarind",
      icon: <Apple className="w-8 h-8" />,
      benefits: ["Natural Sweetness", "Rich Flavor", "Breakfast Perfect"],
      price: "LKR 480"
    },
    {
      id: 6,
      name: "Naimiris Jam (Green)",
      description: "Fresh green tamarind jam with a unique taste profile",
      icon: <Apple className="w-8 h-8" />,
      benefits: ["Fresh Taste", "Natural Colors", "Healthy Choice"],
      price: "LKR 480"
    },
    {
      id: 7,
      name: "Lime Pickle",
      description: "Traditional Sri Lankan lime pickle with tamarind essence",
      icon: <Citrus className="w-8 h-8" />,
      benefits: ["Traditional Recipe", "Long Shelf Life", "Authentic Taste"],
      price: "LKR 350"
    },
    {
      id: 8,
      name: "More Products",
      description: "Discover our expanding range of natural tamarind-based products",
      icon: <Plus className="w-8 h-8" />,
      benefits: ["Coming Soon", "Natural Ingredients", "Sri Lankan Made"],
      price: "Contact Us"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our <span className="text-yellow-400">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of premium tamarind-based products, each crafted with care and traditional Sri Lankan expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
              
              <div className="space-y-2 mb-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                    {benefit}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-black">{product.price}</span>
                <button className="bg-black hover:bg-yellow-400 hover:text-black text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;