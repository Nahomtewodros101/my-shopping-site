import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/shop/Shop";
import Cart from "./Pages/cart/Cart";
import { ShopContextProvider } from './context/ShopContext'; // Corrected import
import Register from "./Pages/cart/Register/Register";
const App = () => {
  return (
    <ShopContextProvider> {/* Corrected component name */}
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" component={<Register/>} />
          </Routes>
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
