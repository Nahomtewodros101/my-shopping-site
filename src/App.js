import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails"; // Import new component
import Shop from "./Components/Shop";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />{" "}
        {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
