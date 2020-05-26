import React from 'react';
import ShopDirectoryOverview from '../../components/shop-directory-overview/shop-directory-overview.component';
import { Route } from 'react-router-dom';
import ShopCatergoy from '../../components/shop-category/shop-category.component';

const Shop = ({ match }) => (
  <div className="shop">
    <Route exact path={`${match.path}`} component={ShopDirectoryOverview} />
    <Route path={`${match.path}/:categoryId`} component={ShopCatergoy} />
  </div>
);

export default Shop;
