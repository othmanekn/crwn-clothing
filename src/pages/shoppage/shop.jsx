import React from "react";
import CollectionsOverview from "../../components/collection-overview/collection-overview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection";
import { firestore, transformCollections } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateShop } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner";

const CollectionOverveiwWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };
  unsbscribreFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      updateCollections(transformCollections(snapshot));
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverveiwWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateShop(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
