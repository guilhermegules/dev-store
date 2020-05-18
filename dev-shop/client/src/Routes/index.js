import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "../ProductDetails";
import App from "../App";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/product-details" component={ProductDetails} />
    </Switch>
  </BrowserRouter>
);
