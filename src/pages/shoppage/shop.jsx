import React from "react";
import CollectionOverviewConatiner from "../../components/collection-overview/collection-overview-container";
import { Route } from "react-router-dom";
import CollectionPageConatiner from "../collection/collectionPage-conatiner";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { useEffect } from "react";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewConatiner}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageConatiner}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
