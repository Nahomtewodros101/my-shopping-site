import React from "react";
import { products } from "../../products";
import Product from './Product';

const Shop = () => {
  return (
    <div>
      <h1 className="text-center font-bold m-3 text-3xl">SHOPENDAW</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
