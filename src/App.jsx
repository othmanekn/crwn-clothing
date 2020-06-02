import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";

var hatPage = () => {
  return <h1>Hat Page</h1>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={hatPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
