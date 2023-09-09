import React from "react";
import "./shop-directory.style.scss";
import ShopDirectoryItem from "./shop-directory-item/shop-directory-item.component";
import { Link } from "react-router-dom";

const ShopDirectory = ({ title, items }) => (
  <div className="product">
    <Link to={`${title.toLowerCase()}`}>
      <h1 className="title">{title}</h1>
    </Link>
    <div className="collection">
      {items
        .filter((items, idx) => idx < 4)
        .map((item) => (
          <ShopDirectoryItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ShopDirectory;
