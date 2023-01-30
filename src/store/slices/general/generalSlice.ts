import { createSlice } from "@reduxjs/toolkit";

interface GeneralState {
  loadingRoute: boolean;
}

const initialState: GeneralState = {
  loadingRoute: false,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoadingRoute: (state, action) => {
      state.loadingRoute = action.payload;
    },
    resetGeneral: () => initialState
  },
  extraReducers: (builder) => { },
});

export const {
  setLoadingRoute,
  resetGeneral
} = generalSlice.actions;
