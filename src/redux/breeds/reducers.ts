import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface OwnState {
  catalogue: string[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: OwnState = {
  catalogue: [],
  hasError: false,
  isLoading: false,
};

export const breedSlice = createSlice({
  name: "breed",
  initialState,
  reducers: {
    catalogueFetched: (state, action: PayloadAction<string[]>) => {
      state.isLoading = false;
      state.catalogue = action.payload;
    },
    errorFetchingCatalogue: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    fetchCatalogue: (state) => {
      state.isLoading = true;
    },
  },
});

export const breeds = (state: RootState) => state.breeds.catalogue;

export const { catalogueFetched, errorFetchingCatalogue, fetchCatalogue } =
  breedSlice.actions;

export default breedSlice.reducer;
