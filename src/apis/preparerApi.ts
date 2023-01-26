import axios from 'axios';
import { DataCreateExercise, DataExercise, DataResult, DataUpdateExercise, ExerciseResponse, ModuleResponse, PREFIXS, PatternResponse, PreparerExercise } from '../interfaces';

export const intancePreparerAPI = axios.create({
  baseURL: 'http://192.168.102.24:14480/api'
})

// Exercises

export const getExercises = async () => {

  const { data } = await intancePreparerAPI
    .get<ExerciseResponse<DataExercise<PreparerExercise[]>>>('/exercise');

  return data;

}

export const getExercise = async (idScenario: string) => {

  const { data } = await intancePreparerAPI
    .get<ExerciseResponse<DataExercise<PreparerExercise>>>(`/exercise/${idScenario}`);

  return data;

}

export const createExercise = async (prefixs: PREFIXS[]) => {

  const { data } = await intancePreparerAPI
    .post<ExerciseResponse<DataCreateExercise>>(`/exercise`, { prefixs });

  return data;

}

export const updateExercise = async (dataExercise: DataUpdateExercise) => {

  const { data } = await intancePreparerAPI
    .put<ExerciseResponse<DataResult>>(`/exercise`, { ...dataExercise });

  return data;

}

// Patterns

export const getPatterns = async () => {

  const { data } = await intancePreparerAPI
    .get<PatternResponse>('/pattern');

  return data;

}

// Modules

export const getModules = async () => {

  const { data } = await intancePreparerAPI
    .get<ModuleResponse>('/module');

  return data;

}