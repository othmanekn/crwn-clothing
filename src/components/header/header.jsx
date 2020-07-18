import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropwdown from "../cart-dropdown/cart-dropdown";
import {
  HeaderContainer,
  LogoConatiner,
  OptionsConatiner,
  Optionlink,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user-actions";

const Header = ({ currentUser, hidden, signOut }) => (
  <HeaderContainer>
    <LogoConatiner to="/">
      <Logo className="logo" />
    </LogoConatiner>
    <OptionsConatiner>
      <Optionlink to="/shop">SHOP</Optionlink>
      <Optionlink to="/contact">CONTACT</Optionlink>
      {currentUser ? (
        <Optionlink as="div" onClick={signOut}>
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

const mapsDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapsDispatchToProps)(Header);
