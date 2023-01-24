import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Stack } from "@mui/material"
import { MainTitle } from "../../ui"
import { ExerciseList } from "../components"
import { startLoadingExercises } from "../../store"
import { useAppDispatch } from "../../hooks";

export const Exercises = () => {

  const dispatch = useAppDispatch();

  const handleLoadingExercises = async () => {
    dispatch(startLoadingExercises());
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
              <Link to="/new/patterns">
                <Button fullWidth variant="contained" color='default' sx={{ display: 'inline-block' }}>NUEVO</Button>
              </Link>
              <Link to="/new/patterns">
                <Button fullWidth variant="contained" color='warning' sx={{ display: 'inline-block' }}>EDITAR</Button>
              </Link>
              <Link to="/new/patterns">
                <Button fullWidth variant="contained" color='danger' sx={{ display: 'inline-block' }}>ELIMINAR</Button>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10.5} >
            <Box sx={{ flexGrow: 1, paddingTop: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
              <ExerciseList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
