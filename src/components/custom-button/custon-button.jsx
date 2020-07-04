import React from "react";
import "./custom-button.scss";

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`custom-button  ${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
