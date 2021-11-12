import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const UserComment = () => {
    const [review, setreview] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/allReview")
        .then((res) => res.json())
        .then((data) => setreview(data));
    }, []);
    
    return (
        <div>
      <h1>review</h1>
      <Container>
      <div className="services">
        <div className="row container">
          {review?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <h1>{pd.name}</h1>
                <p>{pd.email}</p>
                <p>{pd.comments}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
    );
};

export default UserComment;