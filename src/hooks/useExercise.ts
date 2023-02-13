import { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './';
import { PREFIXS, PreparerExercise } from '../interfaces';
import { startCreateExercise, startLoadingExercises } from '../store';

export const useExercise = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedExercises, setSelectedExercises] = useState<PreparerExercise[]>([]);

  const handleLoadingExercises = () => {
    dispatch(startLoadingExercises());
  }

  const handleCreateExercise = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await dispatch(startCreateExercise([PREFIXS.CIS]));
    navigate('/new', { replace: true });

  }

  const handleEditExercise = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleDeleteExercise = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean, { idScenario, dataLocation }: PreparerExercise) => {

    setSelectedExercises((prev: PreparerExercise[]) => {

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
