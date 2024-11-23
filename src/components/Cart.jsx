import React from "react";

const Cart = ({ cart, setcart }) => {
  // Function to remove an individual item from the cart
  const removeItem = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setcart(updatedCart);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Shopping Cart</h3>

      {cart.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <div
            className="card mb-4 shadow-sm"
            key={index}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div className="row g-0">
              {/* Product Image */}
              <div className="col-md-6">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="img-fluid rounded-start"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
              </div>

              {/* Product Details */}
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ₹{product.price}
                  </p>
                  <p className="card-text">
                    <strong>Quantity:</strong> {product.quantity}
                  </p>
                  <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-primary btn-sm">
                    Check Out
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeItem(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
