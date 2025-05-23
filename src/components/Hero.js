import React from 'react'
// import Video from 'next-video'
// import awesomeVideo from '/videos/one-video.mp4'
// import video from  '/videos/one-video.mp4'
import { BatteryCharging, Wind, Droplet, Truck } from 'lucide-react'
import Link from 'next/link'

function Hero() {
    return (
        <div className='h-[100vh] relative flex flex-col justify-end lg:overflow-hidden'>
            <video src="https://videos.pexels.com/video-files/7564888/7564888-uhd_2732_1440_25fps.mp4" className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted></video>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 to-transparent'></div>
            <div className='absolute top-0 left-0 h-full flex flex-col justify-center lg:p-32 lg:w-full px-5 text-center md:text-left'>
                {/* <p className='text-yellow-500 lg:text-lg text-xl tracking-wider mb-5'>AUTOMOTIVE LUBRICANTS</p> */}
                <h1 className='text-white lg:text-8xl md:text-6xl text-5xl font-bold'>Centrol <span className='font-extralight hidden md:inline'>|</span>  <span className='font-light'> Innovation in Motion </span></h1>
                {/* <p className='text-gray-50 lg:text-xl mt-5'>Premium Engine Oils for Unmatched Durability</p> */}
                <Link href={'/products'}>
                <button className='w-60 bg-yellow-500 py-4 mt-10 mx-3 rounded-sm'>Explore Products</button>
                </Link>
            </div>
            <div className='lg:h-[10vh] relative bg-black/90 w-full bg-opacity-50 info-box hidden lg:block'>
                <div className="grid md:grid-cols-4 grid-cols-1 text-fuchsia-50 gap-x-2 bg-black/90">
                    <div className='col-span-1 p-10 border-t-4 border-yellow-500 text-right flex transform translate-y-[0%] hover:-translate-y-[60%] bg-black/90 ease-in-out duration-300'>
                        <BatteryCharging className='mr-2 w-8 h-8 flex-shrink-0' />
                        <div className='text-left'>
                            <h4 className='lg:text-xl lg:mb-8 text-orange-500'>Energy Optimization</h4>
                            <p className='hidden lg:block'>Maximize your engine's efficiency with advanced formulations designed to reduce energy loss and enhance overall performance.</p>
                        </div>
                    </div>
                    <div className='col-span-1 p-10 border-t-4 border-yellow-500 text-right flex transform translate-y-[0%] hover:-translate-y-[60%] bg-black/90 ease-in-out duration-300'>
                        <Wind className='mr-2 w-6 h-6 flex-shrink-0' />
                        <div className='text-left'>
                            <h4 className='lg:text-xl lg:mb-8 text-orange-500'>Renewable Energy Integration</h4>
                            <p className='hidden lg:block'>Support sustainable energy solutions with oils that are compatible with renewable energy systems and eco-friendly technologies.</p>
                        </div>
                    </div>
                    <div className='col-span-1 p-10 border-t-4 border-yellow-500 text-right flex transform translate-y-[0%] hover:-translate-y-[60%] bg-black/90 ease-in-out duration-300'>
                        <Droplet className='mr-2 w-6 h-6 flex-shrink-0' />
                        <div className='text-left'>
                            <h4 className='lg:text-xl lg:mb-8 text-orange-500'>Sustainable Technologies</h4>
                            <p className='hidden lg:block'>Engineered with sustainability in mind, our products minimize environmental impact while delivering superior engine protection.</p>
                        </div>
                    </div>
                    <div className='col-span-1 p-10 border-t-4 border-yellow-500 text-right flex transform translate-y-[0%] hover:-translate-y-[60%] bg-black/90 ease-in-out duration-300'>
                        <Truck className='mr-2 w-6 h-6 flex-shrink-0' />
                        <div className='text-left'>
                            <h4 className='lg:text-xl lg:mb-8 text-orange-500'>Energy Efficiency Optimization</h4>
                            <p className='hidden lg:block'>Enhance fuel economy and reduce emissions with cutting-edge oil technology tailored for modern engines and heavy-duty applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero