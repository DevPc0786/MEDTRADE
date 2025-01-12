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
    <div className="home-page relative w-full h-screen overflow-hidden">
      <video 
        src="/videoo.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
     
      </div>
    </div>
  );
}
