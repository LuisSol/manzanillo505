import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// components
import PublicRoute from "./PublicRoute";
import ScrollToTop from "./ScrollToTop";

//pages
import Home from "../pages/Home";
import Tombola from "../pages/Tombola";

// utils
import { url } from "./url";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <PublicRoute path={url.home} exact component={Home} />
        <PublicRoute path={url.tombola} exact component={Tombola} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
