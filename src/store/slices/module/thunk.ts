import { createAsyncThunk } from "@reduxjs/toolkit";
import { ModuleResponse } from "../../../interfaces";
import { preparerAPI } from "../../../apis";

export const startLoadingModules = createAsyncThunk(
  'module/startLoadingModules',
  async () => {
    const { data } = await preparerAPI.get<ModuleResponse>('/module');
    return data;
  });