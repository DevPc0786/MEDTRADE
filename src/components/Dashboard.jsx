import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [model, setModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: 0,
  }); // State to store the selected product name

  useEffect(() => {
    fetch("http://medtrade.in/api.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setData(data.products);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const contactNumber = "918076603020"; // Replace with your dynamic contact number logic.
  const message = "Hello, I want to know about Medical equipments."; // The default message.

  // Correct WhatsApp link to ensure the message is always pre-filled.
  const whatsappLink = `https://wa.me/${
    contactNumber || " "
  }?text=${encodeURIComponent(message)}`;

  const closeModel = () => {
    setModel(false);
    console.log("close model");
  };

  const handleProductSelect = (productName, productPrice, productOption) => {
    setSelectedProduct({
      name: productName,
      price: productPrice,
      option: productOption,
    }); // Set the selected product name
    setModel(true); // Open the modal
  };

  return (
    <div>
      <div>
        <Home />
        <Healthconcern />

        <div>
          <div className="flex justify-between">
            <h2 className="mx-2 lg:mx-8 mt-10  font-bold tracking-wide text-xl">
              Best Deal for Rent
            </h2>
            <Link
              href="/rent-product"
              className="mx-2 lg:mx-8 mt-10 cursor-pointer text-blue-400 font-bold hover:text-blue-600 hover:underline tracking-wide text-xl"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mx-2  lg:grid-cols-3 xl:grid-cols-5">
            {data
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
            <h2 className="lg:mx-8 mx-2 mt-10  font-bold tracking-wide text-xl">
              Best Deal for Buy
            </h2>
            <Link
              href="/buy-product"
              className="lg:mx-8 mx-2 mt-10 cursor-pointer text-blue-400 font-bold hover:text-blue-600 hover:underline tracking-wide text-xl"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mx-2  lg:grid-cols-3 xl:grid-cols-5">
            {data
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
        <div className="fixed bottom-2 right-2">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img
              className="lg:w-10 lg:h-10 w-12 h-12 cursor-pointer"
              src="/img/whatsapp-logo.png"
              alt="WhatsApp Logo"
            />
          </a>
        </div>
      </div>
      {model && (
        <CallbackForm
          closeModel={closeModel}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
          productOption={selectedProduct.option}
        />
      )}

      <DiscountBanner />
    </div>
  );
};

export default Dashboard;
