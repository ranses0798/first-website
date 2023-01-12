import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getBreedImageList = createSelector(
  (state: RootState, props: string) => props,
  (state: RootState) => state.images.images,
  (props, list) => {
    const findImages = list.find((data) => data.id === props);
    if (findImages) {
      return findImages.imagesList.map((data) => data.imageUrl);
    }
    return [];
  }
);

export const getBreedImageById = createSelector(
  (state: RootState, props: { breedName: string; imageId: string }) => props,
  (state: RootState, props: { breedName: string; imageId: string }) =>
    getBreedImageList(state, props.breedName),
  (props, imagesList) => {
    const image = imagesList.find((url: string) => url.includes(props.imageId));
    return image;
  }
);
