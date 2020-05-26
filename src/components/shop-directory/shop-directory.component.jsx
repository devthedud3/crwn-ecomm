import React from 'react';
import './shop-directory.style.scss';
import ShopDirectoryItem from './shop-directory-item/shop-directory-item.component';

const ShopDirectory = ({ title, items }) => (
  <div className="product">
    <h1 className="title">{title}</h1>
    <div className="collection">
      {items
        .filter((items, idx) => idx < 4)
        .map(item => (
          <ShopDirectoryItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ShopDirectory;
