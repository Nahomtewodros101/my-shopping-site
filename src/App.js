import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./output.css";
import Shop from "./Pages/shop/Shop"; // Correct import for Shop
import Cart from "./Pages/cart/Cart"; // Correct import for Cart

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} /> {/* Correct usage of Shop component */}
          <Route path="/cart" element={<Cart />} /> {/* Correct usage of Cart component */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
