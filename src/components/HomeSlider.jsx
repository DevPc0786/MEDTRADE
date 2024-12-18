import Image from "next/image";
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { TbTruck } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";

const HomeSlider = () => {
  return (
    <div>
      <div className="flex mt-5 bg-white">
        <div className="w-[70%] h-[450px]">
          <div className="h-[85%]">
            <img
              src="https://medirent.co.in/wp-content/uploads/2022/02/banner1-1.jpg"
              alt="Banner Image"
            />
            {/* <img
            className="w-full"
            src="https://medirent.co.in/wp-content/uploads/2022/02/banner1.jpg"
            alt="Banner Image"
          /> */}

            <div className="pb-5 h-full">
              <div className="flex justify-between p-4">
                <div className="flex items-center gap-3">
                  <FaRegThumbsUp color="#28AFB1" size={35} />
                  <div>
                    <h2 className="text-md font-semibold line-clamp-1">
                      Genuine Products
                    </h2>
                    <p className="text-sm">Over 25K products</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TbTruck color="#28AFB1" size={35} />
                  <div>
                    <h2 className="text-md font-semibold line-clamp-1">
                      Home Delivery
                    </h2>
                    <p className="text-sm">Over 25K products</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdPayment color="#28AFB1" size={35} />
                  <div>
                    <h2 className="text-md font-semibold line-clamp-1">
                      Secure Payment
                    </h2>
                    <p className="text-sm">Over 25K products</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TbMessageCircle color="#28AFB1" size={35} />
                  <div>
                    <h2 className="text-md font-semibold line-clamp-1">
                      24/7 Support
                    </h2>
                    <p className="text-sm">Over 25K products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] h-[450px] gap-5">
          <img
            className="w-full h-[50%] pl-5 pb-[0.625rem]"
            src="https://medirent.co.in/wp-content/uploads/2022/02/banner_mask-1.jpg"
            alt="Banner Image"
          />
          <img
            className="w-full h-[50%] pl-5 pt-[0.625rem]"
            src="https://medirent.co.in/wp-content/uploads/2022/02/coccyx-cushion_banner-1.jpg"
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
