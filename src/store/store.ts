import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { exerciseSlice, generalSlice, moduleSlice, patternSlice } from './slices';

export const store = configureStore({
  reducer: {
    exercise: exerciseSlice.reducer,
    general: generalSlice.reducer,
    module: moduleSlice.reducer,
    pattern: patternSlice.reducer,
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
