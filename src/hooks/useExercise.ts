import { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './';
import { PREFIXS, Exercise } from '../interfaces';
import { startCreateExercise, startEditExercise, startLoadingExercises } from '../store';

export const useExercise = () => {

  const { scenario } = useAppSelector(state => state.exercise);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

  const handleLoadingExercises = () => {
    dispatch(startLoadingExercises());
  }

  const handleCreateExercise = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await dispatch(startCreateExercise([PREFIXS.CIS]));
    navigate('/new', { replace: true });

  }

  const handleEditExercise = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!scenario) {
      return;
    }

    await dispatch(startEditExercise(scenario));
    navigate('/new/pattern', { replace: true });
  }

  const handleDeleteExercise = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean, { idScenario, dataLocation }: Exercise) => {

    setSelectedExercises((prev: Exercise[]) => {

      const exist = selectedExercises.find(selectedExercise => selectedExercise.idScenario === idScenario);

      if (!exist && checked) {
        return [
          ...selectedExercises, { idScenario, dataLocation },
        ];
      }

      return selectedExercises.filter(item => item.idScenario !== idScenario);

    });

  }

  useEffect(() => {
    handleLoadingExercises();
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
