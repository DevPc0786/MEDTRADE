import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
// import ShopCategory from "./ShopCategory";
import Healthconcern from "./ShopbyHealth";
import ProductCard from "./ProductCard";
import { products } from "@/assets/constant/product_data";
import CallbackForm from "./CallbackForm";
import { rentProducts } from "@/assets/constant/product_data";
import Link from "next/link";

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

        <div>
          <div className="flex justify-between">
            <h2 className="mx-8 mt-10  font-bold tracking-wide text-xl">
              Best Deal for Rent
            </h2>
            <Link
              href="/products"
              className="mx-8 mt-10 cursor-pointer text-blue-400 font-bold hover:text-blue-600 hover:underline tracking-wide text-xl"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mx-2  lg:grid-cols-3 xl:grid-cols-5">
            {products.slice(0, 5).map((item, i) => (
              <ProductCard key={i} setModel={setModel} item={item} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h2 className="mx-8 mt-10  font-bold tracking-wide text-xl">
              Best Deal for Buy
            </h2>
            <Link
              href="/products"
              className="mx-8 mt-10 cursor-pointer text-blue-400 font-bold hover:text-blue-600 hover:underline tracking-wide text-xl"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mx-2  lg:grid-cols-3 xl:grid-cols-5">
            {rentProducts.slice(0, 5).map((item, i) => (
              <ProductCard key={i} setModel={setModel} item={item} />
            ))}
          </div>
        </div>

        <Healthconcern />
      </div>
      {model && <CallbackForm closeModel={closeModel} />}
    </div>
  );
};

export default Dashboard;
