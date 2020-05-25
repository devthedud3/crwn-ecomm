import React from 'react';
import './checkout-item.style.scss';

import { connect } from 'react-redux';
import { addToCart, subFromCart } from '../../redux/cart/cart.action';
import { removeFromCart } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cart, addToCart, subFromCart, removeFromCart }) => {
  const { imageUrl, name, price, quantity } = cart;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img className="item" alt="img" src={imageUrl} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        {' '}
        <span className="sub" onClick={() => subFromCart(cart)}>
          {' '}
          &#10094;{' '}
        </span>{' '}
        {quantity}{' '}
        <span className="add" onClick={() => addToCart(cart)}>
          {' '}
          &#10095;{' '}
        </span>
      </span>
      <span className="price"> ${price} </span>
      <div className="remove" onClick={() => removeFromCart(cart)}>
        {' '}
        &#10007;{' '}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: item => dispatch(removeFromCart(item)),
  addToCart: item => dispatch(addToCart(item)),
  subFromCart: item => dispatch(subFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
