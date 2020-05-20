import React from 'react';
import ButtonInput from '../button/button.component';
import './cart-dropdown.style.scss';

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-item"></div>
    <ButtonInput className="button">PROCEED TO CHECKOUT</ButtonInput>
  </div>
);

export default CartDropDown;
