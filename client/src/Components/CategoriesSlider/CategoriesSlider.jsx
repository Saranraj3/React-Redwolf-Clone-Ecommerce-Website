import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import featuredcategorytshirt from '../../Assets/Categories/featured-category-t-shirts-23.jpg'
import oversizedTshirt from '../../Assets/Categories/featured-category-oversized-t-shirts-23.jpg'
import femaltTshirt from '../../Assets/Categories/featured-category-female-t-shirt.jpg'
import stickers from '../../Assets/Categories/featured-category-stickers-23.jpg'
import phonecase from '../../Assets/Categories/featured-category-phone-cases-23.jpg'
import coaster from '../../Assets/Categories/featured-category-coasters-23.jpg'
import socks from '../../Assets/Categories/featured-category-socks-23.jpg'
import dropcuts from '../../Assets/Categories/featured-category-oversized-drop-cut.jpg'
import sweatshirts from '../../Assets/Categories/featured-category-oversized-sweat-shirts-23.jpg'
import feamteoversized from '../../Assets/Categories/featured-category-female-oversized-t-shirt.jpg'
import mugs from '../../Assets/Categories/featured-category-mugs-23.jpg'
import poster from '../../Assets/Categories/featured-category-posters-23.jpg'
import baseballcap from '../../Assets/Categories/featured-category-baseball-caps-23.jpg'
import mask from '../../Assets/Categories/featured-category-masks-23.jpg'

function CategoriesSlider() {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (

    <div>
      <h1 className='sm:mt-[2rem] sm:text-center text-2xl font-extrabold  text-gray-700 ' >FEATURED CATEGORIES</h1>
      <p className='sm:text-[1.1rem] sm:text-center sm:mt-1 font-light italic text-gray-700 '>Discover amazing designs by artists from all over the globe!</p>
      <div className=' p-2 m-[4rem] mt-0'>
        <Slider {...settings} className='gap-y-2'>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>T-SHIRTS</p>
            <img className='' src={featuredcategorytshirt} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>OVERSIZED</p>
            <img className='' src={oversizedTshirt} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[12rem] rounded-md bg-red-600 text-white'>WOMEN'S T-SHIRTS</p>
            <img className='' src={femaltTshirt} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>STICKERS</p>
            <img className='' src={stickers} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[10rem] rounded-md bg-red-600 text-white'>MOBILE COVERS</p>
            <img className='' src={phonecase} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>COASTERS</p>
            <img className='' src={coaster} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>SOCKS</p>
            <img className='' src={socks} alt="" />
          </div>
        </Slider>
      </div>
      <div className='m-[4rem] mt-[-4.4rem]'>
        <Slider {...settings} >
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[9rem] rounded-md bg-red-600 text-white'>SWEATSHIRTS</p>
            <img className='' src={sweatshirts} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>DROP CUTS</p>
            <img className='' src={dropcuts} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[18rem] rounded-md bg-red-600 text-white'>WOMEN'S OVERSIZED T-SHIRTS</p>
            <img className='' src={feamteoversized} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>MUGS</p>
            <img className='' src={mugs} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>POSTERS</p>
            <img className='' src={poster} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[7rem] rounded-md bg-red-600 text-white'>BASEBALL CAPS</p>
            <img className='' src={baseballcap} alt="" />
          </div>
          <div className='relative'>
            <p className='absolute ml-2 mt-[16.5rem] text-lg text-center font-extrabold h-[2rem] w-[8rem] rounded-md bg-red-600 text-white'>FACE MASKS</p>
            <img className='' src={mask} alt="" />
          </div>
        </Slider>
      </div>

    </div>


  )
}

export default CategoriesSlider;