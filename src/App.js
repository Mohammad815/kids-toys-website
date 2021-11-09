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


function App() {
  return (
    <div className="App">
      <Router>
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
          <Route exact path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
