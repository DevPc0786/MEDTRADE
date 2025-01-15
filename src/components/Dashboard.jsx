import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
// import ShopCategory from "./ShopCategory";
import Healthconcern from "./ShopbyHealth";
import ProductCard from "./ProductCard";
import { products } from "@/assets/constant/product_data";
import CallbackForm from "./CallbackForm";
import { chairs } from "@/assets/constant/product_data";
import { healthCare } from "@/assets/constant/product_data";

const Dashboard = () => {
   const [model, setModel] = useState(false);

   const closeModel = () => {
     setModel(false);
     console.log("close model");
  };
  
  return (
    <div>
      <div>
        <Home />
        {/* <div>
          <div className="flex justify-between">
            <h2 className="mx-8 mt-10  font-bold tracking-wide text-xl">
              Health Care
            </h2>
            <a href="/products" className="mx-8 mt-10 cursor-pointer text-orange-400 font-bold hover:text-orange-600 tracking-wide text-xl">
              View all
            </a>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {chairs.slice(0, 5).map((item, i) => (
              <ProductCard setModel={setModel} item={item} />
            ))}
          </div>
        </div> */}

        <div>
          <div className="flex justify-between">
            <h2 className="mx-8 mt-10  font-bold tracking-wide text-xl">
              Health Care
            </h2>
            <a href="/products" className="mx-8 mt-10 cursor-pointer text-orange-400 font-bold hover:text-orange-600 tracking-wide text-xl">
              View all
            </a>
          </div>{" "}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.slice(0, 5).map((item, i) => (
              <ProductCard setModel={setModel} item={item} />
            ))}
          </div>
        </div>

        {/* <div>
          <div className="flex justify-between">
            <h2 className="mx-8 mt-10  font-bold tracking-wide text-xl">
              Health Care
            </h2>
            <a href="/products" className="mx-8 mt-10 cursor-pointer text-orange-400 font-bold hover:text-orange-600 tracking-wide text-xl">
              View all
            </a>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {healthCare.slice(0, 5).map((item, i) => (
              <ProductCard setModel={setModel} item={item} />
            ))}
          </div>
        </div> */}

        <Healthconcern />
      </div>
      {model && <CallbackForm closeModel={closeModel} />}
    </div>
  );
};

export default Dashboard;
