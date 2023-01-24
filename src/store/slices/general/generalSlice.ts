import { createSlice } from "@reduxjs/toolkit";

interface initialStateGeneral {
  loadingRoute: boolean;
}

const initialState: initialStateGeneral = {
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
