import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import batman from '../../Assets/Logos/batman-merchandise-india 1.jpg'
import dc from '../../Assets/Logos/dc-comics-merchandise2.jpg'
import harry from '../../Assets/Logos/harry-potter-merchandise.jpg'
import ben10 from '../../Assets/Logos/ben10-merchandise.jpg'
import rick from '../../Assets/Logos/rick-and-morty-merchandise-india.jpg'
import gameofthrones from '../../Assets/Logos/game-of-thrones-merchandise.jpg'
import deadpool from '../../Assets/Logos/Deadpool-1.jpg'
import garfield from '../../Assets/Logos/garfield-merchandise-india.jpg'
import isro from '../../Assets/Logos/isro-merchandise-india.jpg'
import superman from '../../Assets/Logos/Superman-1.jpg'
import cartoon from '../../Assets/Logos/cartoon-network-t-shirts-india.jpg'
import friends from '../../Assets/Logos/friends-merchandise-india.jpg'
import nasa from '../../Assets/Logos/nasa-meatball-logo.jpg'
import starwars from '../../Assets/Logos/star-wars-merchandise-india.jpg'
import disney from '../../Assets/Logos/disney-logo-3.jpg'
import tomandjerry from '../../Assets/Logos/tom-and-jerry-logo-1.jpg'
import peanuts from '../../Assets/Logos/peanuts-snoopy-merchandise.jpg'
import spiderman from '../../Assets/Logos/spider-man-merchandise-india2.jpg'
import naruto from '../../Assets/Logos/Naruto.jpg'
import marvel from '../../Assets/Logos/marvel-merchandise-india.jpg'
import loki from '../../Assets/Logos/Loki-logo.jpg'

function LogoSlider() {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className=''>
      <Slider {...settings} className='overflow-x-hidden w-[80rem] ml-8 '>
        <div className=''>
          <img className='pl-8' src={spiderman} alt="" />
        </div>
        <div className=''>
          <img className='pl-8' src={naruto} alt="" />
        </div>
        <div>
          <img className='pl-8' src={marvel} alt="" />
        </div>
        <div>
          <img className='pl-8' src={loki} alt="" />
        </div>
        <div>
          <img className='pl-8' src={batman} alt="" />
        </div>
        <div>
          <img className='pl-8' src={dc} alt="" />
        </div>
        <div>
          <img className='pl-8' src={harry} alt="" />
        </div>
        <div>
          <img className='pl-8' src={ben10} alt="" />
        </div>
        <div>
          <img className='pl-8' src={rick} alt="" />
        </div>
        <div>
          <img className='pl-8' src={gameofthrones} alt="" />
        </div>
        <div>
          <img className='pl-8' src={deadpool} alt="" />
        </div>
        <div>
          <img className='pl-8' src={garfield} alt="" />
        </div>
        <div>
          <img className='pl-8' src={isro} alt="" />
        </div>
        <div>
          <img className='pl-8' src={superman} alt="" />
        </div>
        <div>
          <img className='pl-8' src={cartoon} alt="" />
        </div>
        <div>
          <img className='pl-8' src={friends} alt="" />
        </div>
        <div>
          <img className='pl-8' src={nasa} alt="" />
        </div>
        <div>
          <img className='pl-8' src={starwars} alt="" />
        </div>
        <div>
          <img className='pl-8' src={disney} alt="" />
        </div>
        <div>
          <img className='pl-8' src={tomandjerry} alt="" />
        </div>
        <div>
          <img className='pl-8' src={peanuts} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default LogoSlider