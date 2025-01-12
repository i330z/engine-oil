"use client";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Link from "next/link";


import One from '@/assets/one.png';
import Two from '@/assets/two.png';
import Three from '@/assets/three.png';
import Four from '@/assets/four.png';
import Five from '@/assets/five.png';
import Six from '@/assets/six.png';

function HomeProductSlider({ productlist = [] }) {
  // Dummy products
  const dummyProducts = [
    {
      slug: "luxury-rose-perfume",
      // src: "https://assets.gulfoilltd.com/gulfindia/files/inline-images/gulf-powertrac-4t-engine-oil.webp",
      src: One,
      alt: "Luxury Rose Perfume",
      title: "Engine Oil",
    },
    {
      slug: "citrus-fresh-scent",
      // src: "https://assets.gulfoilltd.com/gulfindia/files/inline-images/gulf-powertrac-4t-engine-oil.webp",
      src: Two,
      alt: "Citrus Fresh Scent",
      title: "Engine oil",
    },
    {
      slug: "woody-spice-blend",
      // src: "https://assets.gulfoilltd.com/gulfindia/files/inline-images/gulf-powertrac-4t-engine-oil.webp",
      src: Three,
      alt: "Woody Spice Blend",
      title: "Engine Oil",
    },
    {
      slug: "vanilla-amber-delight",
      // src: "https://assets.gulfoilltd.com/gulfindia/files/inline-images/gulf-powertrac-4t-engine-oil.webp",
      src: Four,
      alt: "Vanilla Amber Delight",
      title: "Engine Oil",
    },
    {
      slug: "floral-bouquet-eau",
      // src: "https://assets.gulfoilltd.com/gulfindia/files/inline-images/gulf-powertrac-4t-engine-oil.webp",
      src: Five,
      alt: "Floral Bouquet Eau",
      title: "Engine Oil",
    },
  ];

  // Use dummy products if no productlist is provided
  const products = productlist.length ? productlist : dummyProducts;

  return (
    <div className="grid grid-cols-12  bg-gray-100">
      <div className="xl:col-span-4 lg:col-span-12 md:col-span-12 col-span-12 md:px-40 px-10 md:py-60 py-16  flex items-center justify-center">
        <div>
          <span className="uppercase text-crimson mb-2 inline-block tracking-widest text-yellow-500">
          Premium Engine Oils
          </span>
          <h2 className="md:text-6xl text-5xl mb-5 font-crimson font-semibold">
          Engineered for Excellence
          </h2>
          <p className="text-xl text-gray-600 font-manrope">
          Designed for Efficiency, Trusted for Protection.
          </p>
        </div>
      </div>
      <div className="xl:col-span-8 lg:col-span-12 md:col-span-12 col-span-12 flex items-center justify-center p-2 md:p-0">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper md:mt-20 flex items-center"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index} className="z-0">
              <div className="xl:h-[460px] lg:h-[500px] md:h-[400px] h-[300px] md:mb-20 mb-5">
                <div className="xl:h-[450px] lg:h-[460px] md:h-[360px] h-[260px] overflow-hidden rounded-lg relative">
                  <Link href="#">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
                <div className="text-center relative mt-3">
                  <h3 className="xl:text-2xl lg:text-2xl md:text-2xl text-xl font-crimson text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeProductSlider;
