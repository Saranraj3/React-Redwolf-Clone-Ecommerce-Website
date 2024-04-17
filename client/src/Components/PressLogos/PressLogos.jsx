import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rollingstone from '../../Assets/Press/redwolf-rollingstone.jpg'
import homegrown from '../../Assets/Press/redwolf-homegrown.jpg'
import hindustan from '../../Assets/Press/redwolf-hindustan-times.jpg'
import midday from '../../Assets/Press/redwolf-mid-day.jpg'
import theindianexpress from '../../Assets/Press/redwolf-the-indian-express.jpg'
import thenewindianexpress from '../../Assets/Press/redwolf-new-indian-express.jpg'
import stuff from '../../Assets/Press/stuff-logo.jpg'
import mensxp from '../../Assets/Press/redwolf-mensxp.jpg'
import llb from '../../Assets/Press/lbb-logo.jpg'
import theecnomictimes from '../../Assets/Press/redwolf-economic-times.jpg'

function PressLogos() {
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
        <div className='am:overflow-x-hidden'>
            <p className='text-2xl font-extrabold text-center text-gray-700  mt-[-2rem]'>PRESS</p>
            <div className='mt-[-1rem]'>
                <Slider className='overflow-x-hidden m-[4rem] mt-[1rem] ml-[5.5rem]' {...settings}>
                    <div>
                        <img src={rollingstone} alt="" />
                    </div>
                    <div>
                        <img src={homegrown} alt="" />
                    </div>
                    <div>
                        <img src={hindustan} alt="" />
                    </div>
                    <div>
                        <img src={midday} alt="" />
                    </div>
                    <div>
                        <img src={theindianexpress} alt="" />
                    </div>
                    <div>
                        <img src={thenewindianexpress} alt="" />
                    </div>
                    <div>
                        <img src={stuff} alt="" />
                    </div>
                    <div>
                        <img src={mensxp} alt="" />
                    </div>
                    <div>
                        <img src={llb} alt="" />
                    </div>
                    <div>
                        <img src={theecnomictimes} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default PressLogos