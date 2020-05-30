import { createSelector } from 'reselect';

const shop = state => state.shop;

export const selectAllShopData = createSelector(
  [shop],
  data => data.collections
);

export const convertCollectionKeys = createSelector(
  [selectAllShopData],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopCatergory = urlParam =>
  createSelector([selectAllShopData], collections =>
    collections ? collections[urlParam] : null
  );

export default selectShopCatergory;
