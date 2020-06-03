import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import shopPage from "./pages/shoppage/shop";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
