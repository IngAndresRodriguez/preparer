import { createAsyncThunk } from "@reduxjs/toolkit";
import { PatternResponse } from "../../../interfaces";
import { preparerAPI } from "../../../apis";

export const startLoadingPatterns = createAsyncThunk(
  'pattern/startLoadingPatterns',
  async () => {
    const { data } = await preparerAPI.get<PatternResponse>('/pattern');
    return data;
  });