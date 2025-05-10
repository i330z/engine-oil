"use client";

import React from 'react';
import Image from 'next/image';
import { Beaker, Sun, Wind, Droplet, Fuel, Flame } from 'lucide-react';

function HomeServices() {
  const services = [
    {
      title: "Petroleum Refinery",
      description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu",
      icon: <Fuel />,
    },
    {
      title: "DEF (Diesel Exhaust Fluid) Plant",
      description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu",
      icon: <Sun/>,
    },
    {
      title: "Coolant Plant",
      description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu",
      icon: <Wind />,
    },
    {
      title: "Oil Pump",
      description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu",
      icon: <Droplet />,
    },
    {
      title: "Chemical Factory",
      description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu",
      icon: <Beaker />,
    },
    {
      title: "Greese Plant",
      description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu",
      icon: <Flame />,
    },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20240507130134/Engine-Oil-Running-Low-jpg.webp"
          alt="Industrial background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#000B1F]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="max-w-12xl mb-20">
          <span className="text-yellow-400 font-semibold mb-4 block">
            WHAT WE OFFER
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Clean Innovation, Leading the <br></br> Green Energy Transition in Lubricant Industry
            {/* <span className="block"></span> */}
            {/* <span className="block"></span> */}
          </h1>
          {/* <p className="text-gray-300 text-lg mb-8">
            Ut rhoncus penatibus si consequat habitant fames praesent est nibh nostra eros.
          </p> */}
          {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold transition-colors">
            Discover more
          </button> */}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex flex-col space-y-4">
                <span className="text-yellow-400 text-4xl">
                  {service.icon}
                </span>
                <h3 className="text-white text-xl font-semibold group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomeServices;
