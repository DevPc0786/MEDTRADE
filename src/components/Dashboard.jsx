import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import ShopCategory from "./ShopCategory";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 py-3">
        <Home />
        <ShopCategory />
      </div>
      <Footer className="p-5"/>
    </div>
  );
};

export default Dashboard;
