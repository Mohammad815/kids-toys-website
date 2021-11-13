import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const UserComment = () => {
    const [review, setreview] = useState([]);
    useEffect(() => {
      fetch("https://sheltered-lake-09229.herokuapp.com/allReview")
        .then((res) => res.json())
        .then((data) => setreview(data));
    }, []);
    
    return (
        <div>
      <h2 className="text-info mt-5">Our Client Says</h2>
      <Container>
      <div className="services">
        <div className="row container">
          {review?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <h1>Name : {pd.name}</h1>
                <p>Email : {pd.email}</p>
                <p>Comment : {pd.comments}</p>
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