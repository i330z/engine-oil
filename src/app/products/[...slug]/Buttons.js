'use client';

import React from 'react';
import WhatsAppIcon from '@/assets/whatsapp-svgrepo-com.svg';
import Image from 'next/image';

export default function WhatsAppButtons({ product }) {
  const handleWhatsAppClick = () => {
    const message = `Check out this product: ${product.page_title}\n\n` +
            `View it here: https://centrol.in${window.location.pathname}`;
    const demoNumber = '+918638122677'; // Replace with a random demo number
    const whatsappURL = `https://wa.me/${demoNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="mt-4 bg-[#25D366] text-white flex items-center justify-center space-x-2 px-4 py-3 w-full md:w-1/2 rounded-lg hover:bg-[#20b358] transition duration-300"
    >
      <Image src={WhatsAppIcon} sizes='10' className="w-6 h-6" />
      <span>Enquire Now</span>
    </button>
  );
}