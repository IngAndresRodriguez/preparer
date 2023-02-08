import { MouseEvent, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack } from "@mui/material"
import { MainTitle } from "../../ui"
import { ExerciseList } from "../components"
import { startLoadingExercises, startCreateExercise } from "../../store"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PREFIXS, PreparerExercise } from "../../interfaces";
import { Toast } from "../../utils";

export const Exercises = () => {

  const { scenario } = useAppSelector(state => state.exercise);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoadingExercises = async () => {
    dispatch(startLoadingExercises());
  }

  const handleCreateExercise = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    await dispatch(startCreateExercise([PREFIXS.CIS]));
  }

  const handleEditExercise = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean, exercise: PreparerExercise) => {

  }

  useEffect(() => {

    if (scenario) {
      navigate('/new', { replace: true });
    }

  }, [scenario])

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
              <Link to="/new" onClick={handleCreateExercise}>
                <Button fullWidth variant="contained" color='default' sx={{ display: 'inline-block' }} >NUEVO</Button>
              </Link>
              <Link to="/new/patterns" onClick={handleEditExercise}>
                <Button fullWidth variant="contained" color='warning' sx={{ display: 'inline-block' }}>EDITAR</Button>
              </Link>
              <Link to="/new/patterns">
                <Button fullWidth variant="contained" color='danger' sx={{ display: 'inline-block' }}>ELIMINAR</Button>
              </Link>
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
