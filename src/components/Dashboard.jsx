import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
// import ShopCategory from "./ShopCategory";
import Healthconcern from "./ShopbyHealth";
import ProductCard from "./ProductCard";
import { products } from "@/assets/constant/product_data";
import CallbackForm from "./CallbackForm";

const Dashboard = () => {
   const [model, setModel] = useState(false);

   const closeModel = () => {
     setModel(false);
     console.log("close model");
  };
  
  return (
    <div>
      <div>
        <Home />{" "}
        <h2 className="mx-8 mt-10  font-bold tracking-wide text-xl">
          Medician
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item, i) => (
            <ProductCard setModel={setModel} item={item} />
          ))}
        </div>
        <Healthconcern />
      </div>
      {model && <CallbackForm closeModel={closeModel} />}
    </div>
  );
};

export default Dashboard;
