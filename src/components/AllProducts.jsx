import React, { useState } from 'react'
import ProductCard from './ProductCard';
import { products } from '@/assets/constant/product_data';
import { rentProducts } from '@/assets/constant/product_data';
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
        <div className="grid grid-cols-2 gap-2 mx-2  lg:grid-cols-3 xl:grid-cols-5">
          {products.map((item, i) => (
            <ProductCard key={i} setModel={setModel} item={item} />
          ))}
          {rentProducts.map((item, i) => (
            <ProductCard key={i} item={item} setModel={setModel} />
          ))}
        </div>
      </div>

      {model && <CallbackForm closeModel={closeModel} />}
    </div>
  );
}

export default AllProducts
