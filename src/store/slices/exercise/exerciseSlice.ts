import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DataExercise, ExerciseResponse, PreparerExercise } from '../../../interfaces';
import { Base } from "../interfaces";

interface ExerciseState extends Base {
  exercises: PreparerExercise[];
  exercise?: PreparerExercise;
  scenario?: string;
}

const initialState: ExerciseState = {
  exercises: [],
  loading: 'idle',
  error: null,
}

const startLoading = (state: ExerciseState) => {
  state.loading = 'pending'
}

const loadingFailed = (state: ExerciseState, action: PayloadAction<string>) => {
  state.loading = 'idle'
  state.error = action.payload
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    getExerciseStart: startLoading,
    getExercisesStart: startLoading,
    getExercisesSuccess(state, { payload }: PayloadAction<ExerciseResponse<DataExercise<PreparerExercise[]>>>) {
      const { data: { preparerExercises }, msg } = payload;
      state.loading = 'idle';
      state.exercises = preparerExercises && [...preparerExercises];
      state.message = msg;
      state.error = null;
    },
    getExerciseSuccess(state, { payload }: PayloadAction<ExerciseResponse<DataExercise<PreparerExercise>>>) {
      const { data: { preparerExercise }, msg } = payload;
      state.loading = 'idle';
      state.exercise = preparerExercise && { ...preparerExercise };
      const exists = state.exercises.some(exercise => exercise._id === preparerExercise._id);
      if (!exists) {
        state.exercises.push(preparerExercise);
      } else {
        state.exercises = state.exercises.map(exercises => (exercises._id === preparerExercise._id) ? preparerExercise : exercises)
      }
      state.message = msg;
      state.error = null;
    },
    getExerciseFailure: loadingFailed,
    getExercisesFailure: loadingFailed,
    setActiveScenario: (state, { payload }: PayloadAction<string>) => {
      state.loading = 'idle';
      state.scenario = payload;
      state.error = null;
    },
    resetExercise: () => initialState
  },
  extraReducers: (builder) => { },
})

export const {
  getExercisesStart,
  getExerciseStart,
  getExercisesSuccess,
  getExerciseSuccess,
  getExercisesFailure,
  getExerciseFailure,
  setActiveScenario,
  resetExercise
} = exerciseSlice.actions;