import React from 'react';
import Home from './components/home';
import Settings from './components/settings';
import { BrowserRouter, Route } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
    </React.Fragment>
  </BrowserRouter>
);

export default Root;
