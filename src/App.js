import React from "react";
import { Router, Switch, Route } from "react-router";
import { history } from "./helpers";
import { HOMEPAGE_URL, WELCOMEPAGE_URL } from "./constants";
import { Homepage, WelcomePage } from "./pages/index";

import "./assets/styles/index.scss";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={WELCOMEPAGE_URL}
          render={props => <WelcomePage {...props} />}
        />
        <Route
          exact
          path={HOMEPAGE_URL}
          render={props => <Homepage {...props} />}
        />
      </Switch>
    </Router>
  );
}
