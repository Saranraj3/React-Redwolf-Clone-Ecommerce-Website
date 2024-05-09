import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import marvel from '../../Assets/BrandIcons/marvel.jpg'
import dc from '../../Assets/BrandIcons/DC-comics.jpg'
import harrypotter from '../../Assets/BrandIcons/harry-potter.jpg'
import rickanfmorty from '../../Assets/BrandIcons/rick-and-morty.jpg'
import garfield from '../../Assets/BrandIcons/garfield.jpg'
import peanuts from '../../Assets/BrandIcons/peanuts.jpg'
import redwolfbasic from '../../Assets/BrandIcons/redwolf basics.jpg'

function BrandsSlider() {
    const settings = {
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };
    return (
        <div className='overflow-x-hidden lg:mt-[-13rem] '>
            <h1 className='lg:mt-[10rem] text-2xl font-extrabold text-center text-gray-700' >FEATURED BRANDS</h1>
            <Slider className='sm:m-1 sm:mt-[1rem] md:m-3 lg:mt-[1.5rem] lg:m-3 xl:m-5 xl:ml-[3rem] overflow-x-hidden ' {...settings}>
                <div>
                    <img className='' src={marvel} alt="" />
                </div>
                <div>
                    <img src={dc} alt="" />
                </div>
                <div>
                    <img src={harrypotter} alt="" />
                </div>
                <div>
                    <img src={rickanfmorty} alt="" />
                </div>
                <div>
                    <img src={garfield} alt="" />
                </div>
                <div>
                    <img src={peanuts} alt="" />
                </div>
                <div>
                    <img src={redwolfbasic} alt="" />
                </div>
                <div>
                    <img className='' src={marvel} alt="" />
                </div>
                <div>
                    <img src={dc} alt="" />
                </div>
                <div>
                    <img src={harrypotter} alt="" />
                </div>
                <div>
                    <img src={rickanfmorty} alt="" />
                </div>
                <div>
                    <img src={garfield} alt="" />
                </div>
                <div>
                    <img src={peanuts} alt="" />
                </div>
                <div>
                    <img src={redwolfbasic} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default BrandsSlider