import { call, put, takeEvery } from "redux-saga/effects";
import {
  catalogueFetched,
  errorFetchingCatalogue,
  fetchCatalogue,
} from "./reducers";
import { dogList } from "../../api/dogList";
import { AxiosResponse } from "axios";

export function* loadBreeds() {
  try {
    const response: AxiosResponse<{ message: unknown }> = yield call(
      dogList.getAll
    );
    const breeds: string[] = Object.keys(
      response.data && response.data.message ? response.data.message : []
    );
    yield put(catalogueFetched(breeds));
  } catch (err) {
    console.log(err);
    yield put(errorFetchingCatalogue());
  }
}

export default function* breedSaga() {
  yield takeEvery(fetchCatalogue.type, loadBreeds);
}
