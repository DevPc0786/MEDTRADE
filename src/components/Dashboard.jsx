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
import DiscountBanner from "./DiscountBanner";

const Dashboard = () => {
  const [model, setModel] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({name: "", price: 0}); // State to store the selected product name
  

   const closeModel = () => {
     setModel(false);
     console.log("close model");
  };

     const handleProductSelect = (productName, productPrice) => {
       setSelectedProduct({name: productName, price: productPrice}); // Set the selected product name
       setModel(true); // Open the modal
     };
  
  return (
    <div>
      <div>
        <Home />
        <Healthconcern />

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
            {products
              .filter((item) => item.option === "rent") // Filter products with option "buy"
              .slice(0, 5) // Limit to the first 5 items
              .map((item, i) => (
                <ProductCard
                  key={i}
                  onProductSelect={handleProductSelect} // Pass handler to ProductCard
                  item={item}
                />
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
            {products
              .filter((item) => item.option === "buy") // Filter products with option "buy"
              .slice(0, 5) // Limit to the first 5 items
              .map((item, i) => (
                <ProductCard
                  key={i}
                  onProductSelect={handleProductSelect} // Pass handler to ProductCard
                  item={item}
                />
              ))}
          </div>
        </div>

    
      </div>
      {model && (
        <CallbackForm
          closeModel={closeModel}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
        />
      )}

      <DiscountBanner />
    </div>
  );
};

export default Dashboard;
