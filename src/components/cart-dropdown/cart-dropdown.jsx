import React from "react";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custon-button";

const CartDropwdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default CartDropwdown;
