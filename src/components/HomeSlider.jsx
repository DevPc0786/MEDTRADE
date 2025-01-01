import Image from "next/image";
// import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { TbTruck } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://medirent.co.in/wp-content/uploads/2022/02/banner1-1.jpg",
    "https://medirent.co.in/wp-content/uploads/2022/02/banner1.jpg",
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="lg:h-screen h-60"
            style={{ width: "100%", height: "100%" }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
