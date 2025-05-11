import React from 'react'
import Image from 'next/image'
function AboutHomePage() {
    return (
        <main className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Header Section */}
              <div className="space-y-6">
                <span className="text-orange-500 font-semibold">WHO WE ARE</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Powering Progress Through Eco-Friendly Energy.
                </h1>
                {/* <p className="text-gray-600">
                  Elit bibendum hac lorem class enim posuere auctor rhoncus felis nam pede. Fringilla ridiculus porttitor habitant per faucibus lacinia senectus.
                </p> */}
              </div>
    
              {/* Image and Text Section */}
              <div className="space-y-6">
                {/* <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B1DDF2BFF-9F62-4552-830C-BFC087E4E201%7D-laXUMZogio8PUh8xJthUnAGtCuWJ8J.png"
                    alt="Workers reviewing documents"
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div className="space-y-4">
                  <p className="text-gray-600">
                    At Centrol, we are dedicated to delivering innovative and eco-friendly energy solutions. Our mission is to redefine the lubricant industry with sustainable practices and cutting-edge technology.
                  </p>
                  <p className="text-gray-600">
                    Our products are designed to meet the highest standards of quality and performance, ensuring reliability and efficiency for our customers. We are committed to driving progress while minimizing environmental impact.
                  </p>
                </div>
              </div>
    
              {/* Stats Section */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-orange-500">20+</p>
                  <p className="text-sm text-gray-600">Locations in NE</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-orange-500">84K+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-orange-500">50+</p>
                  <p className="text-sm text-gray-600">Unique Products</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-orange-500">4.7</p>
                  <p className="text-sm text-gray-600">Client Reviews</p>
                </div>
              </div>
            </div>
    
            {/* Right Column */}
            <div className="relative h-[600px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://www.atlaslab.in/img/Engine-Oil-analysis.jpg"
                alt="Ship aerial view"
                fill
                className="object-cover"
              />
              {/* Rating Card */}
              <div className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <p className="text-blue-500 font-medium mb-2">Excellent</p>
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-4xl font-bold">4.7</p>
                <p className="text-xs text-yellow-600 font-medium mt-1">Client Ratings</p>
              </div>
              {/* Bottom Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  Sustainable Energy for a Cleaner Tomorrow
                </h3>
                <p className="text-white/90">
                  <p className="text-white/80 mt-2">Join us in shaping a sustainable future with innovative energy solutions.</p>
                </p>
              </div>
            </div>
          </div>
        </main>
      )
}

export default AboutHomePage