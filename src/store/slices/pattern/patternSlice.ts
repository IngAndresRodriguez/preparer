import { SerializedError, createSlice } from "@reduxjs/toolkit"
import { DataPattern } from "../../../interfaces";
import { startLoadingPatterns } from "./thunk";

interface initialStatePattern {
  patterns: DataPattern[];
  pattern?: DataPattern;
  message?: string;
  loading: 'idle' | 'pending' | 'failed',
  currentRequestId?: string,
  error: SerializedError | null,
}

const initialState: initialStatePattern = {
  patterns: [],
  loading: 'idle',
  error: null,
}

export const patternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    setActivePattern: (state, action) => {
      state.pattern = action.payload;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startLoadingPatterns.pending, (state, action) => {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(startLoadingPatterns.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.patterns = action.payload?.data.dataPatterns && [...action.payload.data.dataPatterns];
          state.currentRequestId = undefined;
          state.message = action.payload?.msg
        }
      })
      .addCase(startLoadingPatterns.rejected, (state, action) => {
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

export const { setActivePattern } = patternSlice.actions;