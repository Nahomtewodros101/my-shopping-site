import React from 'react';
import { products } from '../../products';
import Product from '../Shop/Product';


const Shop = () => {
  return (
    <div className='text-center'>
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
