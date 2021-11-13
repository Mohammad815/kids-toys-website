import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
      fetch("https://sheltered-lake-09229.herokuapp.com/allproducts")
        .then((res) => res.json())
        .then((data) => setproducts(data));
    }, []);
    
    const toyProduct = products.slice(0, 6)
   
   
    return (
        <div>
      <h2 className="text-info mt-5 mb-4">Trending Product</h2>
      <Container>
      <div className="services ">
        <div className="row container ">
          {toyProduct?.map((pd, index) => (
            <div className="col-md-6 col-lg-4 toy-img mb-3">
              
              <Card>
                   <Card.Img variant="top" src={pd?.image} />
                        <Card.Body>
                        <h1>{pd.name}</h1>
                            <p>{pd.description}</p>
                            <p>{pd.price}</p>
                            <Link to={`/products/${pd._id}`}>
                              {" "}
                              <button className="btn btn-info p-2 fs-5">Order Now</button>
                            </Link>
                        </Card.Body>
                    </Card>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
    );
};

export default Products;