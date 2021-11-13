import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Explore.css'


const Explore = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
      fetch("https://sheltered-lake-09229.herokuapp.com/allproducts")
        .then((res) => res.json())
        .then((data) => setproducts(data));
    }, []);
    
    return (
        <div className="mt-5">
      <h2 className="text-info mb-3">Our Top  Rated Products</h2>
      <Container>
      <div className="services">
        <div className="row container">
          {products?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
             <Card className="mb-4">
                   <Card.Img variant="top" src={pd?.image} />
                        <Card.Body>
                        <h1>{pd.name}</h1>
                            <p>{pd.description}</p>
                            <p>{pd.price}</p>
                            <Link to={`/products/${pd._id}`}>
                              {" "}
                              <button className="btn btn-info p-2 fs-4 ">Order Now</button>
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

export default Explore;