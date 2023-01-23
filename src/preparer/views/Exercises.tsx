import { Box, Button, Grid, Stack } from "@mui/material"
import { MainTitle } from "../../ui"
import { ExerciseList } from "../components"

export const Exercises = () => {
  return (
    <>
      <MainTitle title="LISTA DE EJERCICIOS" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ padding: '2rem' }}>
          <Grid item xs={12} sm={12} md={2} lg={1.5}>
            <Stack direction="column" spacing={2}>
              <Button href="/new/patterns" variant="contained" color='default'>NUEVO</Button>
              <Button href="/new/patterns" variant="contained" color='warning'>EDITAR</Button>
              <Button href="/new/patterns" variant="contained" color='danger'>ELIMINAR</Button>
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
