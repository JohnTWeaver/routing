import React from "react";
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect,
  Router,
} from "react-router-dom";
// import { Route } from "react-router-dom";
import Welcome from "../components/welcome";
import PageNotFound from "../components/PageNotFound";

export default function Nav() {
  return (
    <Switch>
      <Route path="/Welcome" component={Welcome} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
