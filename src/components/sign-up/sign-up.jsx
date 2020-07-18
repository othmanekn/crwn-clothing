import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custon-button";

import "./sign-up.scss";
import { signUpStart } from "../../redux/user/user-actions";
import { connect } from "react-redux";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onSubmit = async (e) => {
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    }

    signUpStart({ email, password, displayName });

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span className="title">Sign Up with email and password</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            type="text"
            value={this.state.displayName}
            required
            name="displayName"
            handleChnage={this.onChange}
            label="Name"
          />
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
            minLength="6"
          />
          <FormInput
            type="password"
            value={this.state.confirmPassword}
            required
            name="confirmPassword"
            handleChnage={this.onChange}
            label="Confirm password"
            minLength="6"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapsDipatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(null, mapsDipatchToProps)(SignUp);
