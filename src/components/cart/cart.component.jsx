import React from 'react';
import './cart.style.scss';
import { connect } from 'react-redux';
import { cartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as CartLogo } from '../../assets/bag.svg';

const ShoppingCart = ({ cartHidden }) => (
  <div className="cart" onClick={cartHidden}>
    <CartLogo className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  cartHidden: () => dispatch(cartHidden())
});

export default connect(null, mapDispatchToProps)(ShoppingCart);
