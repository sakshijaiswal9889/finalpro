import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'; // Create this component
import Home from './Home'; // Create this component
import ProductDetails from './ProductDetails'; // Create this component

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/product/:id" component={ProductDetails} />
     
      </Switch>
    </Router>
  );
}

export default Routes;