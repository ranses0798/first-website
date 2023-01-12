import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import breedReducer from "./breeds/reducers";
import imageReducer from "./breedsImages/reducers";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({ breeds: breedReducer, images: imageReducer }),
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
