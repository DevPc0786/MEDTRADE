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
    <div className="home-page relative text-center">
      <video
        src="/videoo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="lg:w-full lg:h-[664px] object-cover "
      >
        Your browser does not support the video tag.
      </video>
      <p className="bg-[#00000099] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full"></p>
      <div className="text-2xl lg:text-6xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="font-bold">
          <span className="text-orange-400">Buy or Rent </span> Medical
          <span className="text-[--btncolor]"> Equipment </span> on best
          <span className="text-yellow-500"> Price. </span>
        </p>
      </div>
    </div>
  );
}
