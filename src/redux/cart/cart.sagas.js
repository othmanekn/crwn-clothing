import userActionTypes from "../user/user-types";
import { clearCart } from "./cart-actions";

const { all, call, put, takeLatest } = require("redux-saga/effects");

function* clearCarOnSignOut() {
  yield put(clearCart());
}

function* onSignoutSucess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCarOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignoutSucess)]);
}
