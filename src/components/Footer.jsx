import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white px-5">
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-4 border-t-2 pt-14 ">
        <div className="text-[14px]">
          <h2 className="font-bold text-[16px] lg:mb-8 mb-2 ">Contact Us</h2>
          <div className="text-[--graytext]">
            <p>Call us 24/7 </p>
            <Link
              href="tel:+91 8076603020"
              className="text-[#0066cc] font-bold text-2xl my-2"
            >
              +91 8076603020
            </Link>
            <p>sec - 12, Noida/Delhi NCR</p>
            <p className="text-black flex gap-3 mt-5">
              <TiSocialFacebook />
              <IoLogoTwitter />
              <FaYoutube />
            </p>
          </div>
        </div>
        <div className="text-[14px]">
          <h2 className="font-bold text-[16px] lg:mb-8 mt-5 lg:mt-0 ">
            Medtrade Bussiness
          </h2>
          <div className="text-[--graytext]">
            <div>
              <ul>
                <li className="my-2 cursor-pointer">
                  <Link href="/about"> About Us </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link href="/contact"> Contact Us </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link href="/products"> All Product </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link href="/"> Privacy Policy </Link>
                </li>
                <li className="my-2 cursor-pointer">
                  <Link href="/"> Terms & Conditions </Link>
                </li>
                {/* <li className="my-2 cursor-pointer"><Link href=""> Return Policy </Link></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-[14px]">
          <h2 className="font-bold text-[16px] lg:mb-8 mt-2 lg:mt-0">
            Join Medtrade Wellness Club
          </h2>
          <p className="text-[--graytext]">
            Register now to get updates on promotions & coupons.
          </p>
        </div>
      </div>

      <hr className="my-10" />
      <div className="lg:flex justify-between pb-4">
        <p className="text-[--graytext]">
          © 2024 Medtrade Services. All Rights Reserved
        </p>
        <div className="flex gap-2 text-[--graytext]">
          <p>We use safe payment from</p>
          <p>Pay</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
