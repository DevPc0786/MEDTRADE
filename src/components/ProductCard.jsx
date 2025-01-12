import React, { useState } from "react";
import { products } from "@/assets/constant/product_data";
import { IoCallOutline } from "react-icons/io5";
import CallbackForm from "./CallbackForm";


const ProductCard = ({item, setModel}) => {

   
    return (
      <div>
       
        <div>
            <div
              className="relative flex w-full my-2 m-auto max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md "
            >
              <a
                className="relative mx-3 mt-3 flex h-52 overflow-hidden rounded-xl items-center"
                href="#"
              >
                <img
                  className="object-cover w-52 m-auto"
                  src={item.images}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-slate-900">
                    {item.name}
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ₹{item.price}
                    </span>
                    <span className="text-sm text-slate-900 line-through mx-2">
                      ₹{item.dis_price}
                    </span>
                  </p>
                  <div className="flex items-center">
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setModel(true)}
                  className="w-full flex items-center justify-center rounded-md bg-[--btncolor] px-5 py-2.5 text-center text-sm font-medium text-white hover:text-slate-900 border hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  {/* <IoCallOutline className="mr-2 h-6 w-6" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  RENT / BUY
                </button>

                {/* <a
                  href="#"
                  className="flex items-center justify-center rounded-md hover:bg-[--btncolor] px-5 py-2.5 text-center text-sm font-medium text-slate-900 hover:text-white border mt-2  focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a> */}

              </div>
            </div>
        </div>

      </div>
    );
};

export default ProductCard;
