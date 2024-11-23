import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { items } from './Data';
import Products from './Products';

const Productdetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [findProduct, setFindProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const similarProducts = items.filter((e) => e.category === product.category);
    setFindProduct(similarProducts);
  }, [id, product.category]);

  return (
    <>
      <div className="container py-5">
        <div className="row z-10">
          <div className="col-md-6">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>Price: ₹{product.price}</h4>
            <Link to={'/cart'} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <Products items={findProduct} />
    </>
  );
};

export default Productdetails;
