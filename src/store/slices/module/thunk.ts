import { getModules } from "../../../apis";
import { AppThunk } from "../../store";
import { getModulesFailure, getModulesStart, getModulesSuccess } from "./moduleSlice";

export const startLoadingModules = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getModulesStart());
    const modules = await getModules();
    dispatch(getModulesSuccess(modules));
  } catch (err: any) {
    dispatch(getModulesFailure(err.toString()));
  }
}