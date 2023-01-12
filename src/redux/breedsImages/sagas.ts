import { call, put, takeEvery } from "redux-saga/effects";
import { imagesFetched, errorFetchingImages, fetchImages } from "./reducers";
import { byBreed } from "../../api/byBreed";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { IBreedImages, ImagesSliceType } from "./types";

export function* loadImages(action: PayloadAction<string>) {
  const query = action.payload;
  try {
    const response: AxiosResponse<{ message: string[] }> = yield call(
      byBreed.getByBreed,
      query
    );
    const imagesMap: IBreedImages[] = response.data.message.map((i) => {
      let splitUrl: string[] = i.split("/");
      let breedName: string = splitUrl[4];
      let imageId: string = splitUrl[5]?.split(".")[0];
      return {
        imageId: imageId,
        breedName: breedName,
        imageUrl: i,
      };
    });
    const images: ImagesSliceType = {
      id: query,
      imagesList: imagesMap,
    };
    yield put(imagesFetched(images));
  } catch (err) {
    console.log(err);
    yield put(errorFetchingImages());
  }
}

export default function* imagesSaga() {
  yield takeEvery(fetchImages.type, loadImages);
}
