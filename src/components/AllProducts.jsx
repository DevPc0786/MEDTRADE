import React, { useState } from 'react'
import ProductCard from './ProductCard';
import { products } from '@/assets/constant/product_data';
import { rentProducts } from '@/assets/constant/product_data';
import CallbackForm from './CallbackForm';

const AllProducts = () => {
  const [model, setModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(""); // State to store the selected product name

  const closeModel = () => {
    setModel(false);
    console.log("close model");
  };

    const handleProductSelect = (productName) => {
      setSelectedProduct(productName); // Set the selected product name
      setModel(true); // Open the modal
    };
  return (
    <div>
      <div>
        <h2 className="mx-8 mt-10  font-bold tracking-wide text-xl">
          All Products
        </h2>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-2 mx-2  lg:grid-cols-3 xl:grid-cols-5">
          {products.map((item, i) => (
            <ProductCard
              key={i}
              onProductSelect={handleProductSelect} // Pass handler to ProductCard
              item={item}
            />
          ))}
          {rentProducts.map((item, i) => (
            <ProductCard
              key={i}
              item={item}
              onProductSelect={handleProductSelect} // Pass handler to ProductCard
            />
          ))}
        </div>
      </div>

      {model && (
        <CallbackForm closeModel={closeModel} productName={selectedProduct} />
      )}
    </div>
  );
}

export default AllProducts
