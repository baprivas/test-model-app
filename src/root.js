import React from 'react';
import List from './components/list';
import Settings from './components/settings';
import { BrowserRouter, Route } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={List} />
      <Route path="/settings" component={Settings} />
    </React.Fragment>
  </BrowserRouter>
);

export default Root;
