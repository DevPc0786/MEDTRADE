import Link from "next/link";
import React from "react";

const DiscountBanner = () => {
  return (
    <div className="bg-[#61a4e9] py-10 lg:py-15 px-5 lg:px-24 flex flex-col lg:flex-row justify-between items-center mb-5 lg:mb-8">
      <div className="mt-5 lg:mt-0 text-center lg:text-left">
        <img src="/img/hand-gloves-mask.png" className="w-60 lg:w-40 h-60 lg:h-40" alt="" />
        <h2 className="text-[#B5E54F] text-3xl font-bold lg:my-1 mt-3">Rs.1000/-</h2>
        <p className="mb-2">
          <s className="text-white">Rs. 1850/-</s>
        </p>
        <Link
          href="/products"
          className="bg-black text-white px-5 py-2 rounded font-bold"
        >
          Shop Now
        </Link>
      </div>

      <div className="mt-10 lg:mt-0 text-center lg:text-left">
        <h2 className="text-xl text-white font-bold lg:mb-2">
          Sale on Masks and Gloves
        </h2>
        <p className="text-sm">Protect Every Touch, Guard Every Breath.</p>
        <p className="text-sm">Safety You Can Rely On, Comfort You Can Feel.</p>
      </div>
      <div className="mt-10 lg:mt-0 text-center lg:text-left">
        <h2 className="text-5xl font-bold text-yellow-500">30%</h2>
        <p className="text-sm tracking-[5px]">Discount</p>
        <p className="text-xl text-white">Limited Stock </p>
      </div>
    </div>
  );
};

export default DiscountBanner;
