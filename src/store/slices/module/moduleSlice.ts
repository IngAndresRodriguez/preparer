import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DataModules, Module, ModuleResponse } from "../../../interfaces";
import { Base } from "../interfaces";

interface ModuleState extends Base {
  modules: Module[];
  module?: Module;
  activeModules: Module[];
}

const initialState: ModuleState = {
  modules: [],
  activeModules: [],
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
    getModulesSuccess(state, { payload }: PayloadAction<ModuleResponse<DataModules<Module[]>>>) {
      const { data: { dataModules }, msg } = payload
      state.loading = 'idle';
      state.modules = dataModules && [...dataModules];
      state.message = msg;
      state.error = null;
    },
    getModuleFailure: loadingFailed,
    getModulesFailure: loadingFailed,
    setActiveModule: (state, { payload }: PayloadAction<Module | undefined>) => {
      state.module = payload;
      state.message = '';
    },
    setActiveModules: (state, { payload }: PayloadAction<Module | undefined>) => {
      if (payload) {
        const exists = state.activeModules.some(module => module._id === payload._id);
        if (!exists) {
          state.activeModules.push(payload);
          state.module = payload;
        } else {
          state.activeModules = state.activeModules.filter(module => module._id !== payload._id)
          state.module = undefined;
        }
        state.message = '';
      } else {
        state.activeModules = [];
        state.module = undefined;
      }
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
  setActiveModules,
  resetModule
} = moduleSlice.actions;