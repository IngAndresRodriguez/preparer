import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExerciseResponse } from "../../../interfaces";
import { preparerAPI } from "../../../apis";

export const startLoadingExercises = createAsyncThunk(
  'exercise/startLoadingExercises',
  async () => {
    const { data } = await preparerAPI.get<ExerciseResponse>('/exercise');
    return data;
  });