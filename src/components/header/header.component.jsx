import React from 'react';
import './header.style.scss';

import ShoppingCart from '../cart/cart.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { activeUser } from '../../redux/user/user.selector';
import { cartHidden } from '../../redux/cart/cart.selector';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/original.svg';
import { ReactComponent as Logotitle } from '../../assets/crwn_custom_logo.svg';

const HeaderDiv = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logotitle className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP{' '}
      </Link>
      <Link className="option" to="/about">
        ABOUT{' '}
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {' '}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign">
          LOGIN{' '}
        </Link>
      )}
      {currentUser ? <ShoppingCart /> : ''}
      {hidden ? null : <CartDropDown />}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: activeUser,
  hidden: cartHidden
});

export default connect(mapStateToProps)(HeaderDiv);
