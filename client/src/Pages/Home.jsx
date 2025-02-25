import React from 'react'
import BannerSlider from '../Components/BannerSlider/BannerSlider'
import Section from '../Components/Section/Section'
import HomeCategory from '../Components/HomeCategory/HomeCategory'
import ProductList from '../Components/ProductList/ProductList'
import Description from '../Components/Description/Description'

function Home() {
  return (
    <div>
      <BannerSlider />
      <Section />
      <ProductList />
      <HomeCategory />
      <Description />
    </div>
  )
}

export default Home