import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ImagesSliceType } from "./types";

interface OwnState {
  images: ImagesSliceType[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: OwnState = {
  images: [],
  hasError: false,
  isLoading: false,
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    imagesFetched: (state, action: PayloadAction<ImagesSliceType>) => {
      state.isLoading = false;
      state.images = [...state.images, action.payload];
    },
    errorFetchingImages: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    fetchImages: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const images = (state: RootState, id: string) => {
  const findImages = state.images.images.find((data) => data.id === id);
  return findImages || [];
};

export const { imagesFetched, errorFetchingImages, fetchImages } =
  imageSlice.actions;

export default imageSlice.reducer;
