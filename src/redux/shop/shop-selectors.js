import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionId) =>
  createSelector([selectShopCollections], (collection) =>
    collection ? collection[collectionId] : null
  );

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (shopCollection) => (shopCollection ? Object.values(shopCollection) : [])
);

export const selectCollectionsIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionsIsLoaded = createSelector(
  [selectShopCollections],
  (collection) => !!collection
);
