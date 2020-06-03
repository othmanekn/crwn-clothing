import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((collection) => (
          <PreviewCollection
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
