import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/Style-slide.css";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="slider" {...settings}>
      <div className="slide-content">
        <img
          src={`${process.env.PUBLIC_URL}./image-car/inova.png`}
          alt="slide 1"
        />
      </div>
      <div className="slide-content">
        <img
          src={`${process.env.PUBLIC_URL}./image-car/bus.png`}
          alt="slide 2"
        />
      </div>
      <div className="slide-content">
        <img
          src={`${process.env.PUBLIC_URL}./image-car/pajero.png`}
          alt="slide 3"
        />
      </div>
    </Slider>
  );
};

export default Slide;
