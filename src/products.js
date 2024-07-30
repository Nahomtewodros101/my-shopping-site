import React from 'react';
import CartItem from './CartItem'; 


import prdt1 from './products/1.png';
import prdt2 from './products/2.png';
import prdt3 from './products/3.png';
import prdt4 from './products/4.png';
import prdt5 from './products/5.png';
import prdt6 from './products/6.webp';
import prdt7 from './products/7.webp';
import prdt8 from './products/8.webp';

export const products = [
  {
    id: 1,
    name: "iPhone",
    price: 999,
    productImage: prdt1,
    description: 'This is a description of Product 2.'
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 1199,
    productImage: prdt2,
  },
  {
    id: 3,
    name: "Camera",
    price: 20,
    productImage: prdt3,
  },
  {
    id: 4,
    name: "Jacket",
    price: 499,
    productImage: prdt4,
  },
  {
    id: 5,
    name: "LED lights",
    price: 30,
    productImage: prdt5,
  },
  {
    id: 6,
    name: "T-shirt",
    price: 150,
    productImage: prdt6,
  },
  {
    id: 7,
    name: "Shirt",
    price: 25,
    productImage: prdt7,
  },
  {
    id: 8,
    name: "Cap",
    price: 25,
    productImage: prdt8,
  },
];
