import React from 'react';
import './cart-dropdown.style.scss';

import CartItem from '../cart-item/cart-item.component';
import ButtonInput from '../button/button.component';

import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selector';

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-item">
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
    <ButtonInput className="button">PROCEED TO CHECKOUT</ButtonInput>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItem(state)
});

export default connect(mapStateToProps)(CartDropDown);
