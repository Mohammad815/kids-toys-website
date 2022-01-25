import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import {  NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './Login.css'
import img from '../../image/contact.png'

const Login = () => {
    const {signInWithGoogle,loginUser}= useAuth()
    const location = useLocation();
    const history = useHistory();

     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
     const [error, setError] = useState("");
     

     const handleGetEmail = (e) =>{
       setEmail(e.target.value)
     }
     const handleGetPassword = (e) =>{
       setPassword(e.target.value)
     }

     const handleLoginWithEmailAndPassword = (e) => {
       e.preventDefault()
       loginUser(email,password)
        .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
              setError(error.message);
            })
     }

    // const redirect_uri = location.state?.from || '/home'



    const handleGoogleLogin = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
          <h3 className="m-4">Welcome back! Please enter your Email and Password to login.</h3>
          <Container>
            <Row>
              <Col md={6} className='left'>
                  <div><img  src={img} alt=""/></div>
              </Col>
              <Col md={6} className='left p-2'>
                  <div>
                      <Form onSubmit={handleLoginWithEmailAndPassword} >
                      <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleGetEmail} type="email" placeholder="Enter email" />
                      
                      </Form.Group>

                      <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleGetPassword} type="password" placeholder="Password" />
                      </Form.Group>
                    
                      <Button className="w-50 fs-5 mb-2"  type="submit">
                        Login
                      </Button> <br />
                      <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <h4 >New User? Please Register</h4>
                                </NavLink>
                  </Form>
                 
              <h2>OR</h2>
              <button className="btn btn-primary  fs-5" onClick={handleGoogleLogin}>Google Sign In</button>
              </div>
              </Col>
            </Row>
          </Container>
         
         
        </div>

    );
};

export default Login;