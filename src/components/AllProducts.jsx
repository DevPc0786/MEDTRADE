import React, { useState } from 'react'
import ProductCard from './ProductCard';
import { products } from '@/assets/constant/product_data';
import { chairs } from '@/assets/constant/product_data';
import { healthCare } from '@/assets/constant/product_data';
import CallbackForm from './CallbackForm';

const AllProducts = () => {
    const [model, setModel] = useState(false);
  
     const closeModel = () => {
       setModel(false);
       console.log("close model");
    };
  return (
    <div>
      <div>
        <h2 className="mx-8 mt-10  font-bold tracking-wide text-xl">
          All Products
        </h2>
      </div>

      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {chairs.map((item, i) => (
            <ProductCard setModel={setModel} item={item} />
          ))}
          {products.map((item, i) => (
            <ProductCard setModel={setModel} item={item} />
          ))}
          {healthCare.map((item, i) => (
            <ProductCard setModel={setModel} item={item} />
          ))}
        </div>
      </div>

      {model && <CallbackForm closeModel={closeModel} />}
    </div>
  );
}

export default AllProducts
