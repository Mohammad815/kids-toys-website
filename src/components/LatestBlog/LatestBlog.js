import React from 'react';
import { Card, Container,Button } from 'react-bootstrap';
import img1 from "../../image/1.jpg"
import img2 from "../../image/2.jpg"
import img3 from "../../image/3.jpg"

const LatestBlog = () => {
    return (
  
            <Container>
            <h4>Latest Blog</h4>
         
            <div className="row container ">
               
            <div className="col-md-6 col-lg-4 toy-img mb-3">
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title>Learn while you grow toys Baby Planet</Card.Title>
                       
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 col-lg-4 toy-img mb-3">
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Mother revolves around her children</Card.Title>
                        
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-6 col-lg-4 toy-img mb-3">
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                        <Card.Title>Baby Planet's toys makes so easy</Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
          </div>
          </Container>
  
    );
};

export default LatestBlog;