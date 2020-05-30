import React from 'react';
import './shop-category.style.scss';

import { connect } from 'react-redux';
import ShopDirectoryItem from '../shop-directory/shop-directory-item/shop-directory-item.component';
import { selectShopCatergory } from '../../redux/shop/shop.selector';

const ShopCatergory = ({ collections }) => {
  const { title, items } = collections;

  return (
    <div className="category">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map(item => (
          <ShopDirectoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, otherProps) => ({
  collections: selectShopCatergory(otherProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps)(ShopCatergory);
