import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { MainTitle } from '../../ui';
import { ModuleList } from '../';
import { useAppDispatch } from '../../hooks';
import { startLoadingModules } from '../../store';

export const Modules = () => {

  const dispatch = useAppDispatch();

  const handleLoadingExercises = async () => {
    dispatch(startLoadingModules());
  }

  useEffect(() => {
    handleLoadingExercises();
  }, [])

  return (
    <>
      <MainTitle title="MODULOS DISPONIBLES" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ padding: '2rem' }}>
          <Grid item xs={12} sm={12} md={12} lg={12} >
            <ModuleList />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
