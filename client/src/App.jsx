import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register"; 
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Contact from "./pages/Contact";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
  
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
    )
};
export default App;
