import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './Navigation.css'

const Navigation = () => {
    const {user,logout}= useAuth();
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg"   variant="dark">
            <Container>
            <Link className="navLink " to="/home">Global Travel Agency</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="text-black" id="responsive-navbar-nav">
                <Nav className="ms-auto navbar">
                    <Link className="navLink" to="/home">Home</Link>
                    <Link className="navLink" to="/addproduct">Add Product</Link>
                  
                    <Link className="navLink" to="/dashboard">Dashboard</Link>
                    
                   
                    
                    {
                        user?.email ? 
                        <Button className="btn btn-info" onClick={logout} variant="light">Logout</Button> :
                        <Link className="navLink" to="/login">Login</Link>
                    }
                    {/* <a className="text-black" href="login">{user?.displayName}</a> */}
                 
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
};

export default Navigation;