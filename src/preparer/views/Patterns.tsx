import { useEffect, MouseEvent } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { MainTitle } from '../../ui';
import { PatternList } from '../';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetExercise, resetGeneral, resetPattern, resetModule, startLoadingPatterns } from '../../store';
import { Toast } from "../../utils";

export const Patterns = () => {

  const { scenario } = useAppSelector(state => state.exercise);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  

  const handleCancel = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    localStorage.removeItem('lastView');
    dispatch(resetExercise());
    dispatch(resetPattern());
    dispatch(resetModule());
    dispatch(resetGeneral());

    navigate('/', { replace: true });
  }

  useEffect(() => {

    if (!scenario) {
      return navigate('/', { replace: true });
    }
    
  }, [])

  return (
    <>
      <MainTitle title="LISTA DE PATRONES DISPONIBLES" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ padding: '2rem' }}>
          <Grid item xs={12} sm={12} md={12} lg={12} >
            <Box
              sx={{
                alignContent: 'space-between',
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1,
                flexWrap: 'wrap',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 100px)',
              }}
            >
              <PatternList />
              <Grid
                container
                spacing={1}
                sx={{
                  padding: '2rem',
                  justifyContent: 'center'
                }}
              >
                <Link to="/" onClick={handleCancel}>
                  <Button variant="contained" color='danger' sx={{ display: 'inline-block' }}>CANCELAR</Button>
                </Link>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
