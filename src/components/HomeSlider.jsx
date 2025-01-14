import Image from "next/image";
// import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { TbTruck } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <div className="home-page ">
      <video 
        src="/videoo.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="lg:w-full lg:h-[664px] object-cover"
      >
        Your browser does not support the video tag.
      </video>
     
    </div>
  );
}
