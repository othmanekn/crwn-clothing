import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddelware from "redux-saga";
import rootSaga from "./root.saga";

const sagaMiddelware = createSagaMiddelware();

const middelwares = [sagaMiddelware];

if (process.env.NODE_ENV === "development") middelwares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middelwares));

sagaMiddelware.run(rootSaga);

export const persistor = persistStore(store);
