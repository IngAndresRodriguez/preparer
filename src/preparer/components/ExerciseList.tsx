import { Grid, Box } from '@mui/material';
import { ExerciseListItem } from './ExerciseListItem';
import { useAppSelector } from '../../hooks/useStore';
import { Empty, Processing } from '../../ui';

export const ExerciseList = () => {

  const { loading, exercises } = useAppSelector(state => state.exercise);

  if (loading === 'pending') {
    return (<Processing />);
  }

  if (exercises.length === 0) {
    return (<Empty showButton title='No hay ejercicios preparados' />);
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: 'calc(100vh - 90px)',
        paddingTop: { xs: 2, sm: 2, md: 0, lg: 0 }
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid
        container
        spacing={2}
        className='scrollable'
        sx={{
          maxHeight: {
            xs: 'calc(78vh - 80px)',
            sm: 'calc(78vh - 80px)',
            md: 'calc(99vh - 80px)',
            lg: 'calc(99vh - 80px)'
          },
          marginLeft: 0
        }}
      >
        {
          exercises.map(exercise => (
            <ExerciseListItem key={exercise._id} exercise={exercise} />
          ))
        }
      </Grid>
    </Box>
  )
}