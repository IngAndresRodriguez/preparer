import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Pattern, DataPatterns, PatternResponse } from "../../../interfaces";
import { Base } from "../interfaces";

interface PatternState extends Base {
  patterns: Pattern[];
  patternId?: number;
  pattern?: Pattern;
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
    getPatternsSuccess(state, { payload }: PayloadAction<PatternResponse<DataPatterns<Pattern[]>>>) {
      const { data: { dataPatterns }, msg } = payload
      state.loading = 'idle';
      state.patterns = dataPatterns && [...dataPatterns];
      state.message = msg;
      state.error = null;
    },
    getPatternSuccess(state, { payload }: PayloadAction<PatternResponse<DataPatterns<Pattern>>>) {
      const { data: { dataPatterns }, msg } = payload;
      state.loading = 'idle';
      state.pattern = dataPatterns && { ...dataPatterns };
      state.patternId = dataPatterns.id;
      const exists = state.patterns.some(pattern => pattern._id === dataPatterns._id);
      if (!exists) {
        state.patterns.push(dataPatterns);
      } else {
        state.patterns = state.patterns.map(pattern => (pattern._id === dataPatterns._id) ? dataPatterns : pattern)
      }
      state.message = msg;
      state.error = null;
    },
    getPatternFailure: loadingFailed,
    getPatternsFailure: loadingFailed,
    setActivePattern: (state, { payload }: PayloadAction<Pattern | undefined>) => {
      state.patternId = payload?.id;
      state.pattern = payload;
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