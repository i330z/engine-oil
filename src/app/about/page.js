import React from 'react'
import Bghero from '@/assets/hero.jpeg'

const About = () => {
  return (
    <div>
      <div
        className='relative h-80 bg-black text-white flex justify-center items-center w-full bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${Bghero.src || Bghero})` }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 opacity-50'></div>
        <h1 className='text-5xl font-bold relative text-orange-500'>About Centrol</h1>
      </div>
      <div className='mt-10 container mx-auto p-6'>
        <p className='md:text-xl text-lg text-gray-700 leading-8'>
          <strong>Cleanovate Technology LLP</strong> is a forward-thinking company specializing in the production of premium lubricants and Diesel Exhaust Fluid (D.E.F.). Our advanced manufacturing facility near Guwahati, Assam, is strategically positioned to address logistical challenges while promoting sustainability and innovation in the lubricant industry.
        </p>
      </div>
    </div>

  )
}

export default About