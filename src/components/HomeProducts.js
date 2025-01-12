
'use client';

import { ShoppingCart, Star } from 'lucide-react';
const products = [
  {
    id: 1,
    name: "Synthetic Pro Max",
    description: "Full synthetic engine oil for maximum performance",
    price: 49.99,
    image: "https://assets.gulfoilltd.com/gulfindia/files/inline-images/gulf-powertrac-4t-engine-oil.webp",
    rating: 4.8,
    viscosity: "5W-30"
  },
  {
    id: 2,
    name: "Ultra Guard",
    description: "Advanced protection for high-mileage engines",
    price: 39.99,
    image: "https://assets.gulfoilltd.com/gulfindia/files/inline-images/gulf-pride-4t-ultra-plus-engine-oil.webp?VersionId=fcIAxnci5a7IxIHwzWqIr4BKr90Hg50O",
    rating: 4.6,
    viscosity: "10W-40"
  },
  {
    id: 3,
    name: "Eco Performance",
    description: "Eco-friendly synthetic blend for modern engines",
    price: 44.99,
    image: "https://assets.gulfoilltd.com/gulfindia/files/inline-images/gulf-powertrac-4t-engine-oil.webp",
    rating: 4.7,
    viscosity: "0W-20"
  },
  {
    id: 4,
    name: "Racing Formula",
    description: "High-performance oil for sports vehicles",
    price: 59.99,
    image: "https://champol.com/wp-content/uploads/2023/07/Engine_Oil_20w40_Group.jpg",
    rating: 4.9,
    viscosity: "15W-50"
  },
  {
    id: 5,
    name: "Diesel Master",
    description: "Specialized formula for diesel engines",
    price: 54.99,
    image: "https://champol.com/wp-content/uploads/2023/07/Engine_Oil_20w40_1-Ltr.jpg",
    rating: 4.7,
    viscosity: "5W-40"
  },
  {
    id: 6,
    name: "Essential Blend",
    description: "Reliable protection for everyday driving",
    price: 34.99,
    image: "https://champol.com/wp-content/uploads/2023/07/Champol_10W30_4T-Engine-Oil-800-1.jpg",
    rating: 4.5,
    viscosity: "10W-30"
  }
];

function HomeProducts() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-1 lg:px-2 py-20">
        <div className="flex justify-center flex-col items-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Engine Oil Products</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, alias.</p>     
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-96">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
              </div>
              
              <div className="py-2 px-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
               
                
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProducts