import React from 'react';
import ShopDirectoryOverview from '../../components/shop-directory-overview/shop-directory-overview.component';
import { Route } from 'react-router-dom';
import ShopCatergory from '../../components/shop-category/shop-category.component';
import { firestore, setCollectionData } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateShopData } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.componet';

const ShopDirectoryOverviewWithSpinner = WithSpinner(ShopDirectoryOverview);
const ShopCategoryWithSpinner = WithSpinner(ShopCatergory);

class Shop extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnap = null;

  componentDidMount() {
    const { updateShopData } = this.props;
    const collectionDataRef = firestore.collection('/collections/');
    collectionDataRef.get().then(snapshot => {
      const newCollectionMap = setCollectionData(snapshot);
      updateShopData(newCollectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <ShopDirectoryOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => (
            <ShopCategoryWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateShopData: newCollectionMap => dispatch(updateShopData(newCollectionMap))
});
export default connect(null, mapDispatchToProps)(Shop);
