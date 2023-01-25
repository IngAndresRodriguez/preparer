import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { MainTitle } from '../../ui';
import { PatternList } from '../';
import { useAppDispatch } from '../../hooks';
import { startLoadingPatterns } from '../../store';

export const Patterns = () => {

  const dispatch = useAppDispatch();

  const handleLoadingExercises = async () => {
    dispatch(startLoadingPatterns());
  }

  useEffect(() => {
    handleLoadingExercises();
  }, [])

  return (
    <>
      <MainTitle title="LISTA DE PATRONES DISPONIBLES" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ padding: '2rem' }}>
          <Grid item xs={12} sm={12} md={12} lg={12} >
            <PatternList />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
