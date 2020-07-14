import ShopActionTypes from "./shop.types";

export const updateShop = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});
