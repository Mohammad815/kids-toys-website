import React from "react";
import { Col, Row } from "react-bootstrap";

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
          <Link to={`${url}/makeAdmin`}>Make Admin</Link>
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