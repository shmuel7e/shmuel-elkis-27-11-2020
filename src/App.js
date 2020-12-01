import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import Header from "../src/cmps/Header";
import { PATH } from "./constants";
import Favorits from "./pages/Favorites";
import { getIcon } from "./helpers";
import PopUp from "./cmps/PopUp";

const icons = [
  <Link to="/">{getIcon("home")}</Link>,
  <Link to="favorites">{getIcon("favorites")}</Link>,
];

const App = (props) => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header icons={icons} />
        <Switch>
          <Route path={PATH.HOME} component={Home} exact />
          <Route path={PATH.FAVORITES} component={Favorits} exact />
        </Switch>
      <PopUp />
      </Router>
    </React.Fragment>
  );
};

export default App;
