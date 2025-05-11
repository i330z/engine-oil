// app/products/[...slug]/page.js
import React from 'react';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '../../../constants/data';
import WhatsAppButtons from './Buttons';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const product = getProductBySlug(slug[0]);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.page_title} - Centrol`,
    description: product.page_content,
    openGraph: {
      title: product.page_title,
      description: product.page_content,
      images: [
        {
          url: product.image.src,
          width: 800,
          height: 600,
          alt: product.page_title,
        },
      ],
      type: 'website',
      siteName: 'Centrol',
    },
    // Additional product-specific metadata
    other: {
      'product:brand': 'Centrol',
      'product:category': product.page_category,
    },
  };
}

export default async function ProductDetails({ params }) {
  const { slug } = params;
  const product = getProductBySlug(slug[0]);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6 flex items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <img src={product.image.src} alt={product.page_title} className="w-full" />
        </div>
        <div className="md:col-span-1 flex flex-col justify-center ">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-2">{product.page_title}</h1>
          <h2 className="text-md tracking-wider text-gray-600 mb-6">{product.page_category}</h2>
          <p className="text-lg mb-6">{product.page_content}</p>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Available Sizes</h2>
            <ul className="flex space-x-4">
              {product.available_sizes.map((size) => (
                <li key={size} className="border border-gray-300 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
                  {size}
                </li>
              ))}
            </ul>
            {/* Render client-side buttons */}
            <WhatsAppButtons product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}