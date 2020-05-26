import React from 'react';
import './shop-directory-overview.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllShopData } from '../../redux/shop/shop.selector';
import ShopDirectory from '../shop-directory/shop-directory.component';

const ShopDirectoryOverview = ({ shopDirectory }) => (
  <div className="shop-overview">
    {shopDirectory.map(({ id, ...others }) => (
      <ShopDirectory key={id} {...others} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopDirectory: selectAllShopData
});

export default connect(mapStateToProps)(ShopDirectoryOverview);
