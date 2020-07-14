import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";

import "./collections-overview.scss";
import PreviewCollection from "../preview-collection/preview-collection";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <PreviewCollection
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
