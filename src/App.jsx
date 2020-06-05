import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import shopPage from "./pages/shoppage/shop";
import "./App.css";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsbscribeFromAuth = null;

  componentDidMount() {
    this.unsbscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsbscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
