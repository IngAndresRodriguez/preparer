import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DataModule, ModuleResponse } from "../../../interfaces";
import { Base } from "../interfaces";

interface ModuleState extends Base {
  modules: DataModule[];
  module?: DataModule
}

const initialState: ModuleState = {
  modules: [],
  loading: 'idle',
  error: null,
}

const startLoading = (state: ModuleState) => {
  state.loading = 'pending'
}

const loadingFailed = (state: ModuleState, action: PayloadAction<string>) => {
  state.loading = 'idle'
  state.error = action.payload
}

export const moduleSlice = createSlice({
  name: 'module',
  initialState,
  reducers: {
    getModuleStart: startLoading,
    getModulesStart: startLoading,
    getModulesSuccess(state, { payload }: PayloadAction<ModuleResponse>) {
      const { data: { dataModules }, msg } = payload
      state.loading = 'idle';
      state.modules = dataModules && [...dataModules];
      state.message = msg;
      state.error = null;
    },
    getModuleFailure: loadingFailed,
    getModulesFailure: loadingFailed,
    setActiveModule: (state, action) => {
      state.module = action.payload;
      state.message = '';
    },
    resetModule: () => initialState,
  },
  extraReducers: (builder) => { },
})

export const {
  getModuleStart,
  getModulesStart,
  getModulesSuccess,
  getModuleFailure,
  getModulesFailure,
  setActiveModule,
  resetModule
} = moduleSlice.actions;