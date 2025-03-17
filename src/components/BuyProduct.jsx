import Link from "next/link";
import React, { useEffect, useState } from "react";
import { products } from "@/assets/constant/product_data";
import ProductCard from "./ProductCard";
import CallbackForm from "./CallbackForm";

const BuyProduct = () => {
  const [model, setModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: 0,
  }); // State to store the selected product name
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleProductSelect = (productName, productPrice, productOption) => {
    setSelectedProduct({
      name: productName,
      price: productPrice,
      option: productOption,
    }); // Set the selected product name
    setModel(true); // Open the modal
  };

  const closeModel = () => {
    setModel(false);
    console.log("close model");
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="lg:mx-8 mx-2 mt-10  font-bold tracking-wide text-xl">
          Best Deal for Buy
        </h2>
        {/* <Link
          href="/products"
          className="lg:mx-8 mx-2 mt-10 cursor-pointer text-blue-400 font-bold hover:text-blue-600 hover:underline tracking-wide text-xl"
        >
          View all
        </Link> */}
      </div>
      <div className="grid grid-cols-2 gap-2 mx-2  lg:grid-cols-3 xl:grid-cols-5">
        {data
          .filter((item) => item.option === "buy") // Filter products with option "buy"
          .map((item, i) => (
            <ProductCard
              key={i}
              onProductSelect={handleProductSelect} // Pass handler to ProductCard
              item={item}
            />
          ))}
      </div>
      {model && (
        <CallbackForm
          closeModel={closeModel}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
          productOption={selectedProduct.option}
        />
      )}
    </div>
  );
};

export default BuyProduct;
