import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coin from "../Screens/Coin";
import Exchange from "../Screens/Exchange";
import Price from "../Screens/Price";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Price} />
      <Route path="/exchanges" component={Exchange} />
      <Route path="/coins" exact component={Coin} />
    </Router>
  );
};
