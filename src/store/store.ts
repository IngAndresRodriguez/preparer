import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { exerciseSlice, generalSlice } from './slices';

export const store = configureStore({
  reducer: {
    general: generalSlice.reducer,
    exercise: exerciseSlice.reducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
