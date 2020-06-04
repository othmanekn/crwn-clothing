import React, { Component } from "react";

import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custon-button";

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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
