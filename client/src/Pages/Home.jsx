import React from 'react'
import LogoSlider from '../Components/LogoSlider/LogoSlider'
import BannerSlider from '../Components/BannerSlider/BannerSlider'
import Section from '../Components/Section/Section'
import CategoriesSlider from '../Components/CategoriesSlider/CategoriesSlider'
import BrandsSlider from '../Components/BrandIcons/BrandIcons'
import HomeCategory from '../Components/HomeCategory/HomeCategory'
import ProductList from '../Components/ProductList/ProductList'
import PressLogos from '../Components/PressLogos/PressLogos'

function Home() {
  return (
    <div>
      <LogoSlider />
      <BannerSlider />
      <Section />
      <CategoriesSlider />
      <BrandsSlider />
      <ProductList />
      <HomeCategory />
      <PressLogos />
    </div>
  )
}

export default Home