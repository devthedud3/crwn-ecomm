import React from 'react';
import './checkout.style.scss';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItem, cartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = ({ cart, cartTotal }) => (
  <div className="checkout">
    <div className="header">
      <div className="item">
        <span>Product</span>
      </div>
      <div className="item">
        <span>Description</span>
      </div>
      <div className="item">
        <span>Quantity</span>
      </div>
      <div className="item">
        <span>Price</span>
      </div>
      <div className="item">
        <span>Remove</span>
      </div>
    </div>
    {cart.map(product => (
      <CheckoutItem key={product.id} cart={product} />
    ))}
    <span className="total">Total: ${cartTotal}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cart: selectCartItem,
  cartTotal: cartTotal
});

export default connect(mapStateToProps)(Checkout);