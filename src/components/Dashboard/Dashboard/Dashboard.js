import React from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from '../../Context/useAuth';
import './Dashboard.css'

import {
    
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Review from "../../Review/Review";
import MakeAdmin from "../../Dashboard/MakeAdmin/MakeAdmin"
import Pay from "../Pay/Pay";
import AddProduct from "../../AddProduct/AddProduct";
import ManagAllProduct from "../ManageAllProducts/ManagAllProduct";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import MyOrder from "../MyOrder/MyOrder";

const Dashboard = () => {
  const {admin}= useAuth()
 
    let { path, url } = useRouteMatch();
    return (
  <Row>
    <Col xs={12} md={3} className="col1 mt-5">
        <div>
        <ul>
        <li>
          <Link className="link" to={`${url}`}>Dashboard</Link>
        </li>
        <li>
          <Link className="link" to={`${url}/review`}>Review</Link>
        </li>
        <li>
          <Link className="link" to={`${url}/pay`}>Payment</Link>
        </li>
        <li>
          <Link className="link" to={`${url}/myOrder`}>My Order</Link>
        </li>
        <li>
          {admin && <div>
           <li>
           <Link className="link" to={`${url}/makeAdmin`}>Make Admin</Link>
           </li>
            <li>
            <Link className="link" to={`${url}/addProduct`}>Add Product</Link>
           </li>
           <li>
          <Link className="link" to={`${url}/manageProduct`}>Manage All Product</Link>
        </li>
        <li>
          <Link className="link" to={`${url}/manageOrder`}>Manage All Order</Link>
        </li>
          </div>}
        </li>  
      </ul>
        </div>
    </Col>
    <Col xs={12} md={9}>
    <Switch>
        <Route path={`${path}/review`}>
            <Review></Review>
        </Route>
        <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/pay`}>
            <Pay></Pay>
        </Route>
        <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/manageProduct`}>
            <ManagAllProduct></ManagAllProduct>
        </Route>
        <Route path={`${path}/manageOrder`}>
            <ManageAllOrder></ManageAllOrder>
        </Route>
        <Route path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
        </Route>
      </Switch>
    </Col>
  </Row>
      
    );
};

export default Dashboard;