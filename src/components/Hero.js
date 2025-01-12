import React from 'react'
// import Video from 'next-video'
// import awesomeVideo from '/videos/one-video.mp4'
import video from  '/videos/one-video.mp4'
import { BatteryCharging, Wind, Droplet, Truck } from 'lucide-react'

function Hero() {
    return (
        <div className='h-[100vh] relative flex flex-col justify-end overflow-hidden'>
            {/* <video src={awesomeVideo} />; */}
            <video src="https://videos.pexels.com/video-files/7564888/7564888-uhd_2732_1440_25fps.mp4" className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted></video>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 to-transparent'></div>
            <div className='absolute top-0 left-0 h-full flex flex-col justify-center p-32 w-8/12'>
                <span className='text-yellow-500 text-lg tracking-wider'>ENGINE OIL</span>
                <h1 className='text-white text-7xl font-bold'>Powering Performance, Protecting Engines</h1>
                <p className='text-gray-50 text-xl mt-5'>Premium Engine Oils for Unmatched Durability</p>
                <button className='w-60 bg-yellow-500 py-4 mt-10 rounded-sm'>Explore Products</button>
            </div>
            <div className='h-[10vh] relative bg-black/90 w-full bg-opacity-50 info-box'>
                <div className="grid grid-cols-4 text-fuchsia-50 gap-x-2 bg-black/90">
                    <div className='col-span-1 p-10 border-t-4 border-yellow-500 text-right flex transform translate-y-[0%] hover:-translate-y-[60%] bg-black/90 ease-in-out duration-300'>
                        <BatteryCharging className='mr-2 w-8 h-8 flex-shrink-0' />
                        <div className='text-left'>
                            <h4 className='text-xl mb-8 text-orange-500'>Energy Optimization</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laudantium consectetur ad optio repellat, officiis voluptatem blanditiis quas numquam beatae!</p>
                        </div>
                    </div>
                    <div className='col-span-1 p-10 border-t-4 border-yellow-500 text-right flex transform translate-y-[0%] hover:-translate-y-[60%] bg-black/90 ease-in-out duration-300'>
                        <Wind className='mr-2 w-6 h-6 flex-shrink-0' />
                        <div className='text-left'>
                            <h4 className='text-xl mb-8 text-orange-500'>Renewable Energy Integration</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laudantium consectetur ad optio repellat, officiis voluptatem blanditiis quas numquam beatae!</p>
                        </div>
                    </div>
                    <div className='col-span-1 p-10 border-t-4 border-yellow-500 text-right flex transform translate-y-[0%] hover:-translate-y-[60%] bg-black/90 ease-in-out duration-300'>
                        <Droplet className='mr-2 w-6 h-6 flex-shrink-0' />
                        <div className='text-left'>
                            <h4 className='text-xl mb-8 text-orange-500'>Sustainable Technologies</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laudantium consectetur ad optio repellat, officiis voluptatem blanditiis quas numquam beatae!</p>
                        </div>
                    </div>
                    <div className='col-span-1 p-10 border-t-4 border-yellow-500 text-right flex transform translate-y-[0%] hover:-translate-y-[60%] bg-black/90 ease-in-out duration-300'>
                        <Truck className='mr-2 w-6 h-6 flex-shrink-0' />
                        <div className='text-left'>
                            <h4 className='text-xl mb-8 text-orange-500'>Energy Efficiency Optimization</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laudantium consectetur ad optio repellat, officiis voluptatem blanditiis quas numquam beatae!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero