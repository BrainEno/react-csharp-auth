import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

import Login from "./components/Login";

export default () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users/authenticate' component={Login} />
    </Switch>
  </Layout>
);
