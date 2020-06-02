import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
