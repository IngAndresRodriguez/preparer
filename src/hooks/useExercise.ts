import { useState, MouseEvent, ChangeEvent, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './';
import { PREFIXS, Exercise } from '../interfaces';
import { startCreateExercise, startEditExercise, startLoadingExercises, startLoadingModules, startLoadingPatterns } from '../store';

export const useExercise = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

  const handleLoadingExercises = () => {
    dispatch(startLoadingExercises());
  }

  const handleLoadingPatterns = async () => {
    dispatch(startLoadingPatterns());
  }

  const handleLoadingModules = async () => {
    dispatch(startLoadingModules());
  }

  const handleCreateExercise = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await dispatch(startCreateExercise([PREFIXS.CIS]));
    navigate('/new', { replace: true });

  }

  const handleEditExercise = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const [dtScenario] = selectedExercises;

    if (!Object.keys(dtScenario).length) {
      return;
    }

    if (!dtScenario.idScenario) {
      return;
    }

    await dispatch(startEditExercise(dtScenario.idScenario));
    navigate('/new/pattern', { replace: true });
  }

  const handleDeleteExercise = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>, checked: boolean, { idScenario, dataLocation }: Exercise) => {

    setSelectedExercises((prev: Exercise[]) => {

      const exist = selectedExercises.find(selectedExercise => selectedExercise.idScenario === idScenario);

      if (!exist && checked) {
        return [
          ...selectedExercises, { idScenario, dataLocation },
        ];
      }

      return selectedExercises.filter(item => item.idScenario !== idScenario);

    });

  }, [selectedExercises])

  useEffect(() => {
    handleLoadingExercises();
    handleLoadingPatterns();
    handleLoadingModules();
  }, [])

  return {
    // Propiedades
    selectedExercises,
    // Metodos
    handleCreateExercise,
    handleEditExercise,
    handleDeleteExercise,
    handleChange

  }
}
