'use client';
import { homeProduct } from '@/constants/data';
import Link from 'next/link';

function HomeProducts() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-1 lg:px-2 py-20">
        <div className="flex justify-center flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Engine Oil Products</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, alias.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeProduct.map((product) => (
            <Link href={`products#${product.name.toLocaleLowerCase().replaceAll(' ','-')}`} key={product.id}>
              <div
              
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-96">
                  <img
                    src={product.image.src}
                    alt={product.name}
                    className="w-full h-full bg-white object-contain"
                  />

                </div>

                <div className="py-2 px-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>




                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProducts