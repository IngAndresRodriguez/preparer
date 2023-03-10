import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { exerciseSlice, generalSlice, moduleSlice, patternSlice } from './slices';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  exercise: exerciseSlice.reducer,
  general: generalSlice.reducer,
  module: moduleSlice.reducer,
  pattern: patternSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [logger, thunk],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(logger)
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
