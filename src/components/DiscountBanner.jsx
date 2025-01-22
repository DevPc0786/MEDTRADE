import React from "react";

const DiscountBanner = () => {
  return (
    <div className="bg-[#61a4e9] py-10 lg:py-15 px-5 lg:px-24 lg:flex justify-between items-center mb-5 lg:mb-8">
      <div className="mt-5 lg:mt-0">
        <img src="/img/hand-gloves-mask.png" className="w-40 h-40" alt="" />
        <h2 className="text-[#B5E54F] text-3xl font-bold my-1">Rs.1000/-</h2>
        <p className="mb-2">
          <s className="text-white">Rs. 1850/-</s>
        </p>
        <a
          href="/products"
          className="bg-black text-white px-5 py-2 rounded font-bold"
        >
          Shop Now
        </a>
      </div>

      <div className="mt-10 lg:mt-0">
        <h2 className="text-xl text-white font-bold lg:mb-2">
          Sale on Masks and Gloves
        </h2>
        <p className="text-sm">Protect Every Touch, Guard Every Breath.</p>
        <p className="text-sm">Safety You Can Rely On, Comfort You Can Feel.</p>
      </div>
      <div className="mt-10 lg:mt-0">
        <h2 className="text-5xl font-bold text-yellow-500">30%</h2>
        <p className="text-sm tracking-[5px]">Discount</p>
        <p className="text-xl text-white">Limited Stock </p>
      </div>
    </div>
  );
};

export default DiscountBanner;
