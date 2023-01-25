import { SerializedError, createSlice } from "@reduxjs/toolkit"
import { DataModule } from "../../../interfaces";
import { startLoadingModules } from "./thunk";

interface initialStateModule {
  modules: DataModule[];
  message?: string;
  loading: 'idle' | 'pending' | 'failed',
  currentRequestId?: string,
  error: SerializedError | null,
}

const initialState: initialStateModule = {
  modules: [],
  loading: 'idle',
  error: null,
}

export const moduleSlice = createSlice({
  name: 'module',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startLoadingModules.pending, (state, action) => {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(startLoadingModules.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.modules = action.payload?.data.dataModules && [...action.payload.data.dataModules];
          state.currentRequestId = undefined;
          state.message = action.payload?.msg
        }
      })
      .addCase(startLoadingModules.rejected, (state, action) => {
        const { requestId } = action.meta
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle'
          state.error = action.error
          state.currentRequestId = undefined
        }
      });
  },
})