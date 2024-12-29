import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
// import ShopCategory from "./ShopCategory";
import Healthconcern from "./ShopbyHealth";
import ProductCard from "./ProductCard";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Home />
        <ProductCard />
        {/* <ShopCategory /> */}
        <Healthconcern />
      </div>
    </div>
  );
};

export default Dashboard;
