import { createStructuredSelector } from "reselect";
import { selectCollectionsIsFetching } from "../../redux/shop/shop-selectors";
import { compose } from "redux";
import { connect } from "react-redux";
import collectionOverview from "./collection-overview";
import WithSpinner from "../with-spinner/with-spinner";

const mapsStateToProps = createStructuredSelector({
  isLoading: selectCollectionsIsFetching,
});

const CollectionOverviewConatiner = compose(
  connect(mapsStateToProps),
  WithSpinner
)(collectionOverview);

export default CollectionOverviewConatiner;
