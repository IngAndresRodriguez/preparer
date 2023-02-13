import { createExercise, getExercise, getExercises, updateExercise } from "../../../apis";
import { DataUpdateExercise, PREFIXS } from "../../../interfaces";
import { AppThunk } from "../../store";
import { setLoadingRoute } from "../general";
import { getExerciseSuccess, getExercisesFailure, getExercisesStart, getExercisesSuccess, setActiveScenario, setErrorMessage } from "./exerciseSlice";

export const startLoadingExercises = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getExercisesStart());
    const exercises = await getExercises();
    dispatch(getExercisesSuccess(exercises));
  } catch (err: any) {
    const { response: { data: { msg } } } = err;
    dispatch(getExercisesFailure(msg ? msg : 'Ha ocurrido un error.'));
  }
}

export const startLoadingExercise = (idScenario: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getExercisesStart());
    const exercise = await getExercise(idScenario);
    dispatch(getExerciseSuccess(exercise));
  } catch (err: any) {
    const { response: { data: { msg } } } = err;
    dispatch(getExercisesFailure(msg ? msg : 'Ha ocurrido un error.'));
  }
}

export const startCreateExercise = (prefixs: PREFIXS[]): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoadingRoute(true));
    const { data: { result, location }, msg } = await createExercise(prefixs);
    dispatch(setLoadingRoute(false));
    if (result === 'OK') {
      dispatch(setActiveScenario(location.idScenario));
    }
  } catch (err: any) {
    const { response: { data: { msg } } } = err;
    dispatch(setLoadingRoute(false));
    dispatch(getExercisesFailure(msg ? msg : 'Ha ocurrido un error.'));
    setTimeout(() => {
      dispatch(setErrorMessage());
    }, 10);
  }
}

export const startEditExercise = (idScenario: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoadingRoute(true));
    const exercise = await getExercise(idScenario);
    const { data: { preparerExercise }, msg } = exercise;
    dispatch(setLoadingRoute(false));
    if (Object.keys(preparerExercise).length) {
      dispatch(getExerciseSuccess(exercise));
    }
  } catch (err: any) {
    const { response: { data: { msg } } } = err;
    dispatch(setLoadingRoute(false));
    dispatch(getExercisesFailure(msg ? msg : 'Ha ocurrido un error.'));
    setTimeout(() => {
      dispatch(setErrorMessage());
    }, 10);
  }
}

export const startUpdateExercise = (dataExercise: DataUpdateExercise): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoadingRoute(true));
    const { data: { result }, msg } = await updateExercise({ ...dataExercise });
    if (result === 'OK') {
      const exercise = await getExercise(dataExercise.idScenario);
      dispatch(getExerciseSuccess(exercise));
      dispatch(setLoadingRoute(false));
    }
  } catch (err: any) {
    const { response: { data: { msg } } } = err;
    dispatch(setLoadingRoute(false));
    dispatch(getExercisesFailure(msg ? msg : 'Ha ocurrido un error.'));
  }
}