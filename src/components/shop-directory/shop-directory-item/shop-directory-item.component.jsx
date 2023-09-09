import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/cart/cart.action";
import "./shop-directory-item.style.scss";
import ButtonInput from "../../button/button.component";

const ShopDirectoryItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="preview-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <ButtonInput onClick={() => addToCart(item)} className="button">
          {" "}
          ADD TO CART{" "}
        </ButtonInput>
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

const mapToDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item))
});

export default connect(null, mapToDispatchToProps)(ShopDirectoryItem);
