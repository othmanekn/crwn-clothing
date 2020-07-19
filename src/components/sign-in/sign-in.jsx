import React, { useState } from "react";

import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custon-button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-actions";
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, signWithGoogleStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    const { email, password } = userCredentials;
    e.preventDefault();
    emailSignInStart({ email, password });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I Already have an account</h2>
      <span className="title">Sign in with email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput
          type="email"
          value={userCredentials.email}
          required
          name="email"
          handleChnage={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          value={userCredentials.password}
          required
          name="password"
          handleChnage={handleChange}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            onClick={signWithGoogleStart}
            isGoogleSignIn
            type="button"
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signWithGoogleStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
