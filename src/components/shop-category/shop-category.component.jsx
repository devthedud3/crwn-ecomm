import React from "react";
import "./shop-category.style.scss";
import { useSelector } from "react-redux";
import ShopDirectoryItem from "../shop-directory/shop-directory-item/shop-directory-item.component";
import { selectShopCatergory } from "../../redux/shop/shop.selector";

const ShopCategory = ({ match }) => {
  const categoryId = match.params.categoryId;
  const collections = useSelector(selectShopCatergory(categoryId));

  console.log(match);
  if (!collections) {
    // Handle the case when the category is not found, e.g., show a loading spinner or an error message
    return null;
  }

  const { title, items } = collections;

  return (
    <div className="category">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <ShopDirectoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
