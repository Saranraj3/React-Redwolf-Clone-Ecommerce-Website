import React from 'react'
import BannerSlider from '../Components/BannerSlider/BannerSlider'
import Section from '../Components/Section/Section'
import CategoriesSlider from '../Components/CategoriesSlider/CategoriesSlider'
import BrandsSlider from '../Components/BrandIcons/BrandIcons'
import HomeCategory from '../Components/HomeCategory/HomeCategory'
import ProductList from '../Components/ProductList/ProductList'
import PressLogos from '../Components/PressLogos/PressLogos'
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