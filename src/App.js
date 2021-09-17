import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import addtocart from "./containers/Addtocart";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route path="/products/:cartId" exact component={addtocart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
