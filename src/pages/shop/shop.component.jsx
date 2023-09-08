import React, { useState, useEffect } from "react";
import { Route, useMatch } from "react-router-dom";
import { firestore, setCollectionData } from "../../firebase/firebase.utils";
import { connect, useDispatch } from "react-redux";
import { updateShopData } from "../../redux/shop/shop.action";

import ShopDirectoryOverview from "../../components/shop-directory-overview/shop-directory-overview.component";
import ShopCategory from "../../components/shop-category/shop-category.component";
import WithSpinner from "../../components/with-spinner/with-spinner.componet";

const ShopDirectoryOverviewWithSpinner = WithSpinner(ShopDirectoryOverview);
const ShopCategoryWithSpinner = WithSpinner(ShopCategory);

const Shop = () => {
  const match = useMatch();
  console.log(match);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCollectionData = async () => {
      const collectionDataRef = firestore.collection("/collections/");
      try {
        const snapshot = await collectionDataRef.get();
        const newCollectionMap = setCollectionData(snapshot);
        dispatch(updateShopData(newCollectionMap));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCollectionData();
  }, [dispatch]);

  return (
    <div className="shop">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <ShopDirectoryOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props) => (
          <ShopCategoryWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateShopData: (newCollectionMap) =>
    dispatch(updateShopData(newCollectionMap))
});

export default connect(null, mapDispatchToProps)(Shop);
