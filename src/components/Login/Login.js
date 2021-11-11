import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './Login.css'

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

    const redirect_uri = location.state?.from || '/home'



    const handleGoogleLogin = () => {
        signInWithGoogle()
      .then((result) => {
          history.push(redirect_uri)
        })
    }
    return (
        <div>
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
            
              <Button variant="primary" type="submit">
                Login
              </Button>
           </Form>
          </Container>
          <button onClick={handleGoogleLogin}>Google Sign In</button>
          <Link className="navLink" to="/register"> <button>If you New user Please go to Register</button></Link>
        </div>

    );
};

export default Login;