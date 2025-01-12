import AboutHomePage from '@/components/About'
import Hero from '@/components/Hero'
import HomeProducts from '@/components/HomeProducts'
import HomeServices from '@/components/HomeServices'
import HomeProductSlider from '@/components/ProductSlider'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutHomePage/>
      <HomeProducts/>
      <HomeServices/>
      <HomeProductSlider/>
    </div>
  )
}

export default Home