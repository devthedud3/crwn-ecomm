import React, { useState, useEffect } from "react";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { firestore, setCollectionData } from "../../firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { updateShopData } from "../../redux/shop/shop.action";
import ShopDirectoryOverview from "../../components/shop-directory-overview/shop-directory-overview.component";
import ShopCategory from "../../components/shop-category/shop-category.component";
import WithSpinner from "../../components/with-spinner/with-spinner.componet";

const ShopDirectoryOverviewWithSpinner = WithSpinner(ShopDirectoryOverview);
const ShopCategoryWithSpinner = WithSpinner(ShopCategory);

const Shop = () => {
  const { categoryId } = useParams();

  console.log(categoryId);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
      <Routes>
        <Route
          path=""
          element={<ShopDirectoryOverviewWithSpinner isLoading={loading} />}
        />
        <Route
          path={":categoryId"}
          element={
            <ShopCategoryWithSpinner
              isLoading={loading}
              categoryId={categoryId}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Shop;
