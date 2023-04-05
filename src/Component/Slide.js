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
          src={`${process.env.PUBLIC_URL}./wisata/pantai-losar.jpg`}
          alt="slide 1"
          width="600"
          height="300"
        />
      </div>
      <div className="slide-content">
        <img
          src={`${process.env.PUBLIC_URL}./wisata/tana-toraja.png`}
          alt="slide 2"
          width="600"
          height="300"
        />
      </div>
      <div className="slide-content">
        <img
          src={`${process.env.PUBLIC_URL}./wisata/pantai-bara.png`}
          alt="slide 3"
          width="600"
          height="300"
        />
      </div>
    </Slider>
  );
};

export default Slide;
