import { createSlice } from "@reduxjs/toolkit";

interface GeneralState {
  loadingRoute: boolean;
}

const initialState: GeneralState = {
  loadingRoute: true,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoadingRoute: (state, action) => {
      state.loadingRoute = action.payload;
    }
  },
  extraReducers: (builder) => { },
});

export const { setLoadingRoute } = generalSlice.actions;
