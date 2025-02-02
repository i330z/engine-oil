import React from 'react'
import {productList} from '@/constants/data'
import Image from 'next/image'
import Link from 'next/link';

function ProductPage() {
    const groupedProducts = productList.reduce((acc, product) => {
        if (!acc[product.page_category]) {
            acc[product.page_category] = [];
        }
        acc[product.page_category].push(product);
        return acc;
    }, {});

    return (
        <div>
            <div className='relative h-80 bg-black text-white flex justify-center items-center w-full bg-[url("https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?cs=srgb&dl=pexels-daniel-andraski-197681005-13065690.jpg&fm=jpg")] bg-cover bg-center bg-no-repeat'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 opacity-50'></div>
                <h1 className='text-6xl font-bold relative text-orange-500'>Our Products</h1>
            </div>
            <div className='container mx-auto p-6 mt-10 text-gray-700'>
                <p className='md:text-xl text-lg text-gray-700 leading-8'>As a dynamic new entrant in the industrial lubrication sector, Cantrol is driven by innovation, precision, and a commitment to redefining industry standards. Built on fresh expertise and cutting-edge technology, we deliver high-performance lubricants tailored to modern industrial demands—from hydraulic systems and compressors to enclosed gearboxes and pneumatic tools. While we may be new, our focus on quality, reliability, and responsive technical support ensures seamless integration into your operations, minimizing downtime and maximizing efficiency.</p>
                <div className='mt-10'>
                    {
                        Object.keys(groupedProducts).map((category, index) => (
                            <div key={index}>
                                <h2 className='text-3xl font-semibold text-gray-900 mb-6 mt-10 tracking-wider'>{category}</h2>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                    {
                                        groupedProducts[category].map((product, index) => (
                                            <Link href={`/products/${product.slug}`} key={index}>
                                            <div key={index} className='col-span-1 p-4 relative rounded-md bg-gray-50/50 group'>
                                                <Image src={product.image.src} alt={product.name} width={400} height={400} className='w-full h-98 object-contain rounded-md'/>
                                                <h3 className='text-xl font-semibold text-gray-900 my-2 group-hover:text-blue-800'>{product.page_title}</h3>
                                                <h4 className='text-md font-semibold text-gray-400 my-2 group-hover:text-yellow-500'>{product.page_product}</h4>
                                            </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductPage