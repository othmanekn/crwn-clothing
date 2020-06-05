import React, { Component } from "react";

import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custon-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I Already have an account</h2>
        <span className="title">Sign in with email and password</span>

        <form onSubmit={this.onSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            required
            name="email"
            handleChnage={this.onChange}
            label="Email"
          />
          <FormInput
            type="password"
            value={this.state.password}
            required
            name="password"
            handleChnage={this.onChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
