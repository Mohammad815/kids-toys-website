import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import {  NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './Login.css'

const Login = () => {
    const {signInWithGoogle,loginUser}= useAuth()
    const location = useLocation();
    const history = useHistory();

     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
     const [error, setError] = useState("");
     console.log(error)

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
          <h3 className="m-4">Welcome back! Please enter your Email and password to login.</h3>
          <Container className="form">
          <Form onSubmit={handleLoginWithEmailAndPassword} className="w-50">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleGetEmail} type="email" placeholder="Enter email" />
              
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handleGetPassword} type="password" placeholder="Password" />
              </Form.Group>
            
              <Button className="w-25 fs-4  mb-3" variant="primary" type="submit">
                Login
              </Button> <br />
              <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <h4 variant="primary">New User? Please Register</h4>
                        </NavLink>
           </Form>
          </Container>
         <h2>OR</h2>
          <button className="btn btn-primary  fs-4" onClick={handleGoogleLogin}>Google Sign In</button>
         
        </div>

    );
};

export default Login;