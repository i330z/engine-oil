import React from 'react'

function ProductPage() {
    return (
        <div>
            <div className='relative h-60 bg-black text-white flex justify-center items-center w-full bg-[url("https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?cs=srgb&dl=pexels-daniel-andraski-197681005-13065690.jpg&fm=jpg")] bg-cover bg-center bg-no-repeat'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 opacity-50'></div>
                <h1 className='text-5xl font-bold relative text-orange-500'>Products</h1>
            </div>
            <div className='container mx-auto px-4 py-5 text-lg text-gray-700'>
                <p>As a dynamic new entrant in the industrial lubrication sector, Cantrol is driven by innovation, precision, and a commitment to redefining industry standards. Built on fresh expertise and cutting-edge technology, we deliver high-performance lubricants tailored to modern industrial demands—from hydraulic systems and compressors to enclosed gearboxes and pneumatic tools. While we may be new, our focus on quality, reliability, and responsive technical support ensures seamless integration into your operations, minimizing downtime and maximizing efficiency.</p>
            </div>
        </div>
    )
}

export default ProductPage