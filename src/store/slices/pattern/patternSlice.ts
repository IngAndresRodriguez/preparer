import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DataPattern, PatternResponse } from "../../../interfaces";
import { Base } from "../interfaces";

interface PatternState extends Base {
  patterns: DataPattern[];
  pattern?: DataPattern;
}

const initialState: PatternState = {
  patterns: [],
  loading: 'idle',
  error: null,
}

const startLoading = (state: PatternState) => {
  state.loading = 'pending'
}

const loadingFailed = (state: PatternState, action: PayloadAction<string>) => {
  state.loading = 'idle'
  state.error = action.payload
}

export const patternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    getPatternStart: startLoading,
    getPatternsStart: startLoading,
    getPatternsSuccess(state, { payload }: PayloadAction<PatternResponse>) {
      const { data: { dataPatterns }, msg } = payload
      state.loading = 'idle';
      state.patterns = dataPatterns && [...dataPatterns];
      state.message = msg;
      state.error = null;
    },
    getPatternFailure: loadingFailed,
    getPatternsFailure: loadingFailed,
    setActivePattern: (state, action) => {
      state.pattern = action.payload;
      state.message = '';
    },
    resetPattern: () => initialState,
  },
  extraReducers: (builder) => { },
})

export const {
  getPatternStart,
  getPatternsStart,
  getPatternsSuccess,
  getPatternFailure,
  getPatternsFailure,
  setActivePattern,
  resetPattern
} = patternSlice.actions;