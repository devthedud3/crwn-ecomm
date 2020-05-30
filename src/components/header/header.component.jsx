import React from 'react';

import ShoppingCart from '../cart/cart.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { activeUser } from '../../redux/user/user.selector';
import { cartHidden } from '../../redux/cart/cart.selector';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import {
  HeaderContainer,
  LogoContainer,
  LogoStyled,
  OptionsDiv,
  OptionLink
} from './header.style';

const HeaderDiv = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <LogoStyled />
    </LogoContainer>

    <OptionsDiv>
      <OptionLink to="/shop">SHOP </OptionLink>
      <OptionLink to="/about">ABOUT </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          {' '}
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/sign">LOGIN </OptionLink>
      )}
      {currentUser ? <ShoppingCart /> : ''}
      {hidden ? null : <CartDropDown />}
    </OptionsDiv>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: activeUser,
  hidden: cartHidden
});

export default connect(mapStateToProps)(HeaderDiv);
