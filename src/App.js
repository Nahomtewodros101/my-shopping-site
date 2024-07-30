import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ProductDetails from './ProductDetails'; // Import the new component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
