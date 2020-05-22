import React from 'react';
import { connect } from 'react-redux';
import ButtonInput from '../button/button.component';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropDown);
