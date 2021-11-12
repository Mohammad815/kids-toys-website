import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AddProduct from './components/AddProduct/AddProduct';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
import PrivateRoute from './components/PirvateRoute/PrivateRoute';

import Navigation from './components/Shared/Navigation/Navigation';
import Details from './components/Home/Details/Details';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
       <AuthProvider>
            <Router>
              <Navigation></Navigation>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/register">
                  <Register></Register>
                </Route>
                <Route exact path="/login">
                  <Login></Login>
                </Route>
                <Route exact path="/products/:productId">
                  <Details></Details>
                </Route>
              
                <PrivateRoute  path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <Route exact path="/addproduct">
                  <AddProduct></AddProduct>
                </Route>
              </Switch>
          </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
