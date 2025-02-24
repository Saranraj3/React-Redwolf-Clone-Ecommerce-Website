import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import onepiece from "../../Assets/BannerSlieder/one-piece-color-spread-wallpapers.jpg";
import demonSlayer from "../../Assets/BannerSlieder/Demon-slayer.jpg";
import deathNote from "../../Assets/BannerSlieder/Death-Note.jpg";
import attackOnTitan from "../../Assets/BannerSlieder/Attack-On-Titan.jpg";

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
    <div className=" overflow-x-hidden">
      <Slider {...settings} className="overflow-x-hidden">
        <div>
          <img src={onepiece} alt="" />
        </div>
        <div>
          <img src={demonSlayer} alt="" />
        </div>
        <div>
          <img src={deathNote} alt="" />
        </div>
        <div>
          <img src={attackOnTitan} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default BannerSlider;
