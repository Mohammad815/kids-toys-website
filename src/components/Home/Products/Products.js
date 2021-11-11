import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/allproducts")
        .then((res) => res.json())
        .then((data) => setproducts(data));
    }, []);
    
    // const toyProduct = products.slice(0, 4)
   
    // console.log(toyProduct);
    return (
        <div>
      <h1>Products</h1>
      <Container>
      <div className="services">
        <div className="row container">
          {products?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="w-50" src={pd?.image} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.description}</p>
                <p>{pd.price}</p>
                <Link to={`/products/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
    );
};

export default Products;