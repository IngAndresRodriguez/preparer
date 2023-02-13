import { Box, Button, Grid, Stack } from "@mui/material"
import { MainTitle } from "../../ui"
import { ExerciseList } from "../components"
import { useExercise } from "../../hooks";

export const Exercises = () => {

  const { selectedExercises, handleCreateExercise, handleEditExercise, handleDeleteExercise, handleChange } = useExercise();

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
                sx={{
                  display: 'inline-block',
                  '&.Mui-disabled': {
                    backgroundColor: 'default.main',
                    opacity: .65
                  }
                }}
                disabled={selectedExercises.length ? true : false}
              >
                NUEVO
              </Button>
              <Button
                onClick={handleEditExercise}
                fullWidth
                variant="contained"
                color='warning'
                sx={{
                  display: 'inline-block',
                  '&.Mui-disabled': {
                    backgroundColor: 'warning.main',
                    opacity: .65
                  }
                }}
                disabled={selectedExercises.length === 1 ? false : true}
              >
                EDITAR
              </Button>
              <Button
                onClick={handleDeleteExercise}
                fullWidth
                variant="contained"
                color='danger'
                sx={{
                  display: 'inline-block',
                  '&.Mui-disabled': {
                    backgroundColor: 'danger.main',
                    opacity: .65
                  }
                }}
                disabled={selectedExercises.length < 1 ? true : false}
              >
                ELIMINAR
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10.5} >
            <ExerciseList handleChange={handleChange} handleCreateExercise={handleCreateExercise} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
