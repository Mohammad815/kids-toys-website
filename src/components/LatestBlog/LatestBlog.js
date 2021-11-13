import React from 'react';
import { Card, Container,Button } from 'react-bootstrap';
import img1 from "../../image/1.jpg"
import img2 from "../../image/2.jpg"
import img3 from "../../image/3.jpg"

const LatestBlog = () => {
    return (
  
            <Container>
            <h2 className="text-info mt-5 mb-4">Latest Blog</h2>
         
            <div className="row container ">
               
            <div className="col-md-6 col-lg-4 toy-img mb-3">
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title>Learn while you grow toys Baby Planet</Card.Title>
                       
                        <Button className="btn btn-info p-2 fs-5 mt-2">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4 toy-img mb-3">
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Mother revolves around her children</Card.Title>
                        
                        <Button className="btn mt-2 btn-info p-2 fs-5">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-6 col-lg-4 toy-img mb-3">
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                        <Card.Title>Baby Planet's toys makes so easy</Card.Title>
                        <Button className="btn btn-info p-2 fs-5 mt-2">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
          </div>
          </Container>
  
    );
};

export default LatestBlog;