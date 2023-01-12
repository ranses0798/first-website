import { all, fork } from "redux-saga/effects";
import imageSaga from "./breedsImages/sagas";
import breedSaga from "./breeds/sagas";

export default function* IndexSaga() {
  yield all([fork(imageSaga), fork(breedSaga)]);
}
