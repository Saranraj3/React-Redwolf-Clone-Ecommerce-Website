import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import alpha from '../../Assets/BannerSlieder/redwolf-alpha-membership.jpg'
import dtpromo from '../../Assets/BannerSlieder/dtg-promo.jpg'
import dropcut from '../../Assets/BannerSlieder/dropcut-t-shirts-india.jpg'
import fullsleeve from '../../Assets/BannerSlieder/fullsleeve-t-shirts.jpg'
import oversized from '../../Assets/BannerSlieder/oversized-t-shirts.jpg'
import naruto from '../../Assets/BannerSlieder/Naruto.jpg'
import tshirt from '../../Assets/BannerSlieder/t-shirts-india.jpg'
import xmen from '../../Assets/BannerSlieder/x-men-dp-wolverine.jpg'
import hoodies from '../../Assets/BannerSlieder/hoodies-india.jpg'
import womentshirt from '../../Assets/BannerSlieder/t-shirts-for-women.jpg'
import basicpremium from '../../Assets/BannerSlieder/redwolf-basics.jpg'


function BannerSlider() {

  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className=' overflow-x-hidden'>
      <Slider {...settings} className='overflow-x-hidden'>
        <div>
          <img src={alpha} alt="" />
        </div>
        <div>
          <img src={dtpromo} alt="" />
        </div>
        <div>
          <img src={dropcut} alt="" />
        </div>
        <div>
          <img src={fullsleeve} alt="" />
        </div>
        <div>
          <img src={oversized} alt="" />
        </div>
        <div>
          <img src={naruto} alt="" />
        </div>
        <div>
          <img src={tshirt} alt="" />
        </div>
        <div>
          <img src={xmen} alt="" />
        </div>
        <div>
          <img src={hoodies} alt="" />
        </div>
        <div>
          <img src={womentshirt} alt="" />
        </div>
        <div>
          <img src={basicpremium} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default BannerSlider