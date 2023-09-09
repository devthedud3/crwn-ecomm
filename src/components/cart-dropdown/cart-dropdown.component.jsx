import React from "react";
import "./cart-dropdown.style.scss";

import CartItem from "../cart-item/cart-item.component";
import ButtonInput from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selector";
import { cartHidden } from "../../redux/cart/cart.action";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItem);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleCheckout = () => {
    navigation("/checkout");
    dispatch(cartHidden());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <span className="empty-cart">YOUR CART IS EMPTY</span>
        )}
      </div>
      <ButtonInput onClick={handleCheckout} className="button">
        PROCEED TO CHECKOUT
      </ButtonInput>
    </div>
  );
};

export default CartDropDown;
