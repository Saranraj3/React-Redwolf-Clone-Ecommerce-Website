import React from 'react'
import LogoSlider from '../Components/LogoSlider/LogoSlider'
import BannerSlider from '../Components/BannerSlider/BannerSlider'
import Section from '../Components/Section/Section'

function Home() {
  return (
    <div>
      <LogoSlider/>
      <BannerSlider/>
      <Section/>
    </div>
  )
}

export default Home