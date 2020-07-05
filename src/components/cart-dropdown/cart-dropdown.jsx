import React from "react";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custon-button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";

const CartDropwdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.item.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps)(CartDropwdown);
