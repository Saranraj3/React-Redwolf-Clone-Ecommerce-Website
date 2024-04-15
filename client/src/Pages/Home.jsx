import React from 'react'
import LogoSlider from '../Components/LogoSlider/LogoSlider'
import BannerSlider from '../Components/BannerSlider/BannerSlider'
import Section from '../Components/Section/Section'
import CategoriesSlider from '../Components/CategoriesSlider/CategoriesSlider'

function Home() {
  return (
    <div>
      <LogoSlider/>
      <BannerSlider/>
      <Section/>
      <CategoriesSlider/>
    </div>
  )
}

export default Home