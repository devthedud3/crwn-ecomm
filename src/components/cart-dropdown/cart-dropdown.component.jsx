import React from "react";
import "./cart-dropdown.style.scss";

import CartItem from "../cart-item/cart-item.component";
import ButtonInput from "../button/button.component";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selector";
import { cartHidden } from "../../redux/cart/cart.action";
import { withRouter } from "../../helper-functions";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-item">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <span className="empty-cart"> YOUR CART IS EMPTY</span>
      )}
    </div>
    <ButtonInput
      onClick={() => {
        history.push("/checkout");
        dispatch(cartHidden());
      }}
      className="button"
    >
      {" "}
      PROCEED TO CHECKOUT
    </ButtonInput>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
