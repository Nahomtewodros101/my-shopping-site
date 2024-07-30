import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ProductDetails from './ProductDetails'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} /> 
      </Routes>
    </Router>
  );
};

export default App;
