import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custon-button";

import "./sign-up.scss";
import { signUpStart } from "../../redux/user/user-actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    }

    signUpStart({ email, password, displayName });

    setUserCredentials({
      ...userCredentials,
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span className="title">Sign Up with email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          type="text"
          value={displayName}
          required
          name="displayName"
          handleChnage={onChange}
          label="Name"
        />
        <FormInput
          type="email"
          value={email}
          required
          name="email"
          handleChnage={onChange}
          label="Email"
        />
        <FormInput
          type="password"
          value={password}
          required
          name="password"
          handleChnage={onChange}
          label="Password"
          minLength="6"
        />
        <FormInput
          type="password"
          value={confirmPassword}
          required
          name="confirmPassword"
          handleChnage={onChange}
          label="Confirm password"
          minLength="6"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapsDipatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(null, mapsDipatchToProps)(SignUp);
