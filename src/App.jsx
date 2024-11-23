import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/nav'
import { useState } from "react";
import Products from "./components/Products";
import Productdetails from "./components/Productdetails";
import Searchitem from "./components/Searchitem";
import Cart from "./components/Cart"
import { items } from "./components/Data";

const App = () => {
  const [data, setdata] = useState([...items])
  const [cart, setcart] = useState([])
  return (
    <>
      <Router>
        <Nav cart={cart} setdata={setdata} />
        <Routes>
          <Route path="/" element={<Products cart={cart} setcart={setcart} items={data} />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/search/:term" element={<Searchitem />} />
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
