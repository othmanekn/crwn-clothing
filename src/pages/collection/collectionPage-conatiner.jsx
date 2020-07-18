const { createStructuredSelector } = require("reselect");
const {
  selectCollectionsIsLoaded,
} = require("../../redux/shop/shop-selectors");
const { compose } = require("redux");
const { default: collectionPage } = require("./collectionPage");
const { connect } = require("react-redux");
const {
  default: WithSpinner,
} = require("../../components/with-spinner/with-spinner");

const mapStateToprops = createStructuredSelector({
  isLoading: (state) => !selectCollectionsIsLoaded(state),
});

const CollectionOverviewConatiner = compose(
  connect(mapStateToprops),
  WithSpinner
)(collectionPage);

export default CollectionOverviewConatiner;
