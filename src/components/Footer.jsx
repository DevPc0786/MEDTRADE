import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white px-5">
      <div className="grid grid-cols-4 mt-4 border-t-2 pt-14 ">
        <div className="text-[14px]">
          <h2 className="font-bold text-[16px] mb-8">Contact Us</h2>
          <div className="text-[#666]">
            <p>Call us 24/7 </p>
            <p className="text-[#0066cc] font-bold text-2xl my-2">
              011-2552 2552
            </p>
            <p>sec - 12, Noida/Delhi NCR</p>
            <p className="text-black flex gap-3 mt-5">
              <TiSocialFacebook />
              <IoLogoTwitter />
              <FaYoutube />
            </p>
          </div>
        </div>
        <div className="text-[14px]">
          <h2 className="font-bold text-[16px] mb-8">Medirent Bussiness</h2>
          <div className="text-[#666]">
            <div>
              <p className="my-2">About Us</p>
              <p className="my-2">Privacy Policy </p>
              <p className="my-2">Terms & Conditions </p>
              <p className="my-2">Shipping Policy </p>
              <p className="my-2">Return Policy</p>
              <p className="my-2">HO Location</p>
            </div>
          </div>
        </div>
        <div className="text-[14px]">
          <h2 className="font-bold text-[16px] mb-8">Company</h2>
          <p className="text-[#666]">About Us</p>
        </div>
        <div className="text-[14px]">
          <h2 className="font-bold text-[16px] mb-8">
            Join Medirent Wellness Club
          </h2>
          <p className="text-[#666]">
            Register now to get updates on promotions & coupons.
          </p>
        </div>
      </div>

      <hr className="my-10" />
      <div className="flex justify-between pb-4">
        <p>© 2024 Medirent Services. All Rights Reserved</p>
        <div className="flex gap-2 text-[#666]">
          <p>We use safe payment from</p>
          <p>Pay</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
