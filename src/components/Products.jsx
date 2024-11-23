import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ items, cart, setcart }) => {

  const addtocart = (id, price, title, description, imgSrc) => {
    const existingProductIndex = cart.findIndex((product) => product.id === id);

    if (existingProductIndex !== -1) {
      // Update quantity of existing product
      const updatedCart = cart.map((product, index) =>
        index === existingProductIndex ? { ...product, quantity: product.quantity + 1 } : product
      );
      setcart(updatedCart);
    } else {
      // Add new product with quantity 1
      const newProduct = { id, price, title, description, imgSrc, quantity: 1 };
      setcart([...cart, newProduct]);
    }

    toast.success('Item added to cart!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container bg-black py-5 d-flex justify-content-center z-10">
        <div className="row justify-content-center">
          {items.map((product) => (
            <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center" key={product.id}>
              <div className="card text-white bg-dark" style={{ width: "18rem", height: "28rem", padding: "10px" }}>
                <div style={{ height: "60%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.imgSrc} className="card-img-top" alt={product.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
                  </Link>
                </div>
                <div className="card-body" style={{ height: "40%" }}>
                  <h5 className="card-title" style={{ fontSize: "1.1rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {product.title}
                  </h5>
                  <p className="card-text" style={{ fontSize: "0.9rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {product.description}
                  </p>
                  <p className="card-text"><strong>Price: ₹{product.price}</strong></p>
                  <button onClick={() => addtocart(product.id, product.price, product.title, product.description, product.imgSrc)} className="btn btn-primary btn-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;