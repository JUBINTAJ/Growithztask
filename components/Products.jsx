import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Premium Dry Dog Food',
    price: 24.99,
    rating: 5,
    image: 'https://images.pexels.com/photos/6568944/pexels-photo-6568944.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '20%'
  },
  {
    id: '2',
    name: 'Durable Bone Chew Toy',
    price: 12.95,
    rating: 4,
    image: 'https://images.pexels.com/photos/6568851/pexels-photo-6568851.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: 'New'
  },
  {
    id: '3',
    name: 'Multi-Level Cat Tree',
    price: 89.99,
    rating: 5,
    image: 'https://images.pexels.com/photos/6568973/pexels-photo-6568973.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '50%'
  },
  {
    id: '4',
    name: 'Grain-Free Cat Food',
    price: 18.49,
    rating: 4,
    image: 'https://images.pexels.com/photos/6568977/pexels-photo-6568977.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: 'Hot'
  },
  {
    id: '5',
    name: 'Deluxe Bird Cage',
    price: 129.99,
    rating: 5,
    image: 'https://images.pexels.com/photos/6568986/pexels-photo-6568986.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: 'Top'
  },
  {
    id: '6',
    name: 'Premium Bird Seed Mix',
    price: 14.95,
    rating: 4,
    image: 'https://images.pexels.com/photos/6568990/pexels-photo-6568990.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: 'New'
  },
  {
    id: '7',
    name: 'Orthopedic Dog Bed',
    price: 59.99,
    rating: 5,
    image: 'https://images.pexels.com/photos/6568995/pexels-photo-6568995.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '20%'
  },
  {
    id: '8',
    name: 'Soft-Sided Cat Carrier',
    price: 34.95,
    rating: 4,
    image: 'https://images.pexels.com/photos/6569001/pexels-photo-6569001.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: 'Hot'
  },
  {
    id: '9',
    name: 'Reflective Dog Leash',
    price: 19.95,
    rating: 5,
    image: 'https://images.pexels.com/photos/6569005/pexels-photo-6569005.jpeg?auto=compress&cs=tinysrgb&w=300',
    tag: '20%'
  }
];

const ProductsSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">Pet Supplies</h2>
      <div className="flex gap-3 mb-6">
        <button className="px-4 py-2 bg-teal-400 text-white rounded-full">
          All Pets
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Dogs
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          Cats
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          Birds
        </button>
      </div>
      <div className="bg-amber-100/50 rounded-xl p-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-600">Filter Products</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-teal-400 text-white rounded-full text-sm">
            All
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm flex items-center gap-2">
            Food
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm flex items-center gap-2">
            Toys
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm flex items-center gap-2">
            Beds
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm flex items-center gap-2">
            Accessories
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm flex items-center gap-2">
            Carriers
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm flex items-center gap-2">
            Grooming
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm flex items-center gap-2">
            Health
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="relative mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              {product.tag && (
                <span className="absolute top-2 left-2 bg-teal-400 text-white text-xs px-2 py-1 rounded-full">
                  {product.tag}
                </span>
              )}
            </div>
            <h3 className="text-gray-800 font-medium mb-2">{product.name}</h3>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < product.rating
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">
                ${product.price.toFixed(2)}
              </span>
              <button className="bg-amber-400 text-white px-4 py-2 rounded-full text-sm hover:bg-amber-500 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
