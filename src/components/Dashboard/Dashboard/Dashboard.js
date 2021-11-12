import React from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from '../../Context/useAuth';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Home from "../../Home/Home";
import Review from "../../Review/Review";
import MakeAdmin from "../../Dashboard/MakeAdmin/MakeAdmin"

const Dashboard = () => {
  const {admin}= useAuth()
  console.log(admin)
    let { path, url } = useRouteMatch();
    return (
        <Row>
    <Col xs={12} md={4}>
    <ul>
        <li>
          <Link to={`${url}`}>Home</Link>
        </li>
        <li>
          <Link to={`${url}/review`}>Review</Link>
        </li>
        <li>
          {admin && <Link to={`${url}/makeAdmin`}>Make Admin</Link>}
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
    </Col>
    <Col xs={6} md={8}>
    <Switch>
        <Route exact path={path}>
          <Home></Home>
        </Route>
        <Route path={`${path}/review`}>
            <Review></Review>
        </Route>
        <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
    </Col>
  </Row>
      
    );
};

export default Dashboard;