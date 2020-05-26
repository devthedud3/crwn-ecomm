import { createSelector } from 'reselect';

const COLLECTION_KEY = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

export const shop = state => state.shop;

export const selectAllShopData = createSelector([shop], data => data.shop);

export const selectShopCatergory = urlParam =>
  createSelector([selectAllShopData], collections =>
    collections.find(collection => collection.id === COLLECTION_KEY[urlParam])
  );

export default selectShopCatergory;
