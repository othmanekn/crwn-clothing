import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropwdown from "../cart-dropdown/cart-dropdown";
import {
  HeaderContainer,
  LogoConatiner,
  OptionsConatiner,
  Optionlink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoConatiner to="/">
      <Logo className="logo" />
    </LogoConatiner>
    <OptionsConatiner>
      <Optionlink to="/shop">SHOP</Optionlink>
      <Optionlink to="/contact">CONTACT</Optionlink>
      {currentUser ? (
        <Optionlink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </Optionlink>
      ) : (
        <Optionlink to="/signin">SIGN IN</Optionlink>
      )}
      <CartIcon />
    </OptionsConatiner>
    {hidden ? null : <CartDropwdown />}
  </HeaderContainer>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
