import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './Navigation.css'

const Navigation = () => {
    const {user,logout}= useAuth();
    return (
        <Navbar className="navbar bg-info" collapseOnSelect expand="lg"   variant="dark">
            <Container>
            <Link className="navLink " to="/home">Kid Toys</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="text-black" id="responsive-navbar-nav">
                <Nav className="ms-auto navbar">
                    <Link className="navLink" to="/home">Home</Link>
                    <Link className="navLink" to="/contact">Contact</Link>
                  
                    {
                        user?.email ? 
                        <div>
                              <Link className="navLink" to="/dashboard">Dashboard</Link>
                            <Button className="btn bg-primary p-2 btn-info " onClick={logout} variant="light">Logout</Button>
                        </div> :
                        <Link className="navLink" to="/login">Login</Link>
                    }
                    <span className="text-black fs-4 ms-2" >{user?.displayName}</span>
                    
                 
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
};

export default Navigation;