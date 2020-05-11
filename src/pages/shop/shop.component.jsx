import React from 'react';
import SHOP_DATA from '../../data/shop.data.jsx';
import CollectionPreview from '../../components/preview/preview.component.jsx';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop">
        {this.state.collections.map(({ id, ...others }) => (
          <CollectionPreview key={id} {...others} />
        ))}
      </div>
    );
  }
}

export default Shop;
