import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";

const Nav = ({ setdata, cart }) => {
  const navigate = useNavigate();
  const [searchitems, setsearchitems] = useState("");

  const filterbycategory = (category) => {
    const elem = items.filter((product) => product.category === category);
    setdata(elem);
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchitems}`);
    setsearchitems("");
  };

  return (
    <>
      <header className="sticky-top shadow" style={{ zIndex: 1, backgroundColor: "white" }}>
        {/* Navbar */}
        <div className="navbar px-3 py-2 bg-dark text-white d-flex align-items-center justify-content-between">
          {/* Brand */}
          <Link to={"/"} className="brand text-white text-decoration-none fw-bold">
            E-cart
          </Link>

          {/* Search Bar */}
          <form onSubmit={handelsubmit} className="d-flex w-50">
            <input
              value={searchitems}
              onChange={(e) => setsearchitems(e.target.value)}
              className="form-control me-2"
              type="text"
              placeholder="Search Products"
              aria-label="Search"
            />
          </form>

          {/* Cart */}
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </button>
          </Link>
        </div>

        {/* Filter Section */}
        <div className="bg-gray-100 py-2">
          <div className="container d-flex flex-wrap gap-2 align-items-center justify-content-center">
            <span className="text-black-700 fw-semibold">Filter by:</span>
            <button
              onClick={() => setdata(items)}
              className="btn btn-outline-secondary btn-sm"
            >
              No Filter
            </button>
            <button
              onClick={() => filterbycategory("phones")}
              className="btn btn-outline-secondary btn-sm"
            >
              Phones
            </button>
            <button
              onClick={() => filterbycategory("laptops")}
              className="btn btn-outline-secondary btn-sm"
            >
              Laptops
            </button>
            <button
              onClick={() => filterbycategory("tablets")}
              className="btn btn-outline-secondary btn-sm"
            >
              Tablets
            </button>
            <button
              onClick={() => filterbycategory("watches")}
              className="btn btn-outline-secondary btn-sm"
            >
              Watches
            </button>
            <button
              onClick={() => filterbycategory("earbuds")}
              className="btn btn-outline-secondary btn-sm"
            >
              Earbuds
            </button>
            <button
              onClick={() => filterbycategory("headphones")}
              className="btn btn-outline-secondary btn-sm"
            >
              Headphones
            </button>
            <button
              onClick={() => filterbycategory("bluetooth")}
              className="btn btn-outline-secondary btn-sm"
            >
              Bluetooth
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
