import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Price from "../Screens/Price";
import Exchange from "../Screens/Exchange";
import Coin from "../Screens/Coin";
import CoinDetail from "../Screens/Coin/Components/CoinDetail";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Price} />
      <Route path="/exchanges" exact component={Exchange} />
      <Route path="/coins" exact component={Coin} />
      <Route path="/coins/:coin_id" exact component={CoinDetail} />
    </Router>
  );
};

export default AppRouter;
