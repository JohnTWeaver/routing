import React from "react";
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect,
  Router,
} from "react-router-dom";
// import { Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome";
import Nav from "./Navigation/Nav";
import history from "./services/history";

function App() {
  return (
    <Router history={history}>
      <Nav />
    </Router>

    // <div className="App">
    //   <Route path="/Welcome" component={Welcome} />
    // </div>
  );
}

export default App;
