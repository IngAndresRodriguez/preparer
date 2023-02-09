import { MouseEvent, useEffect, ChangeEvent, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack } from "@mui/material"
import { MainTitle } from "../../ui"
import { ExerciseList } from "../components"
import { startLoadingExercises, startCreateExercise } from "../../store"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PREFIXS, PreparerExercise } from "../../interfaces";
import { Toast } from "../../utils";

export const Exercises = () => {

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

  return (
    <>
      <MainTitle title="LISTA DE EJERCICIOS" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ padding: '2rem' }}>
          <Grid item xs={12} sm={12} md={2} lg={1.5}>
            <Stack direction="column" spacing={2}>
              <Button
                onClick={handleCreateExercise}
                fullWidth
                variant="contained"
                color='default'
                sx={{ display: 'inline-block' }}
                disabled={selectedExercises.length ? true : false}
              >
                NUEVO
              </Button>
              <Button
                onClick={handleEditExercise}
                fullWidth
                variant="contained"
                color='warning'
                sx={{ display: 'inline-block' }}
                disabled={selectedExercises.length === 1 ? false : true}
              >
                EDITAR
              </Button>
              <Button
                onClick={handleDeleteExercise}
                fullWidth
                variant="contained"
                color='danger'
                sx={{ display: 'inline-block' }}
                disabled={selectedExercises.length < 1 ? true : false}
              >
                ELIMINAR
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10.5} >
            <ExerciseList handleChange={handleChange} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
