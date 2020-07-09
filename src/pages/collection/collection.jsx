import React from "react";

import "./collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";
import CollectionItem from "../../components/collection-item/collection-item";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <div className="title">{collection.title} </div>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
