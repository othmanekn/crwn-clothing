import ShopActionTypes from "./shop.types";

export const updateShop = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (mapCollections) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: mapCollections,
});

export const fetchCollectionsFailure = (errMsg) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errMsg,
});
