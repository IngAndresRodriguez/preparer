import { SerializedError, createSlice } from "@reduxjs/toolkit"
import { PreparerExercise } from '../../../interfaces';
import { startLoadingExercises } from "./thunk";
import { RootState } from "../../store";

interface initialStateExercise {
  exercises: PreparerExercise[];
  message?: string;
  loading: 'idle' | 'pending' | 'failed',
  currentRequestId?: string,
  error: SerializedError | null,
}

const initialState: initialStateExercise = {
  exercises: [],
  loading: 'idle',
  error: null,
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startLoadingExercises.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(startLoadingExercises.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          action.payload?.data.preparerExercises && state.exercises.push(...action.payload.data.preparerExercises);
          state.currentRequestId = undefined;
          state.message = action.payload?.msg
        }
      })
      .addCase(startLoadingExercises.rejected, (state, action) => {
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

export const selectLoadingRoute = (state: RootState) => state.general.loadingRoute;