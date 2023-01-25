import { Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { PatternListItem } from './PatternListItem';
import { useAppSelector } from '../../hooks';
import { Empty, Processing } from '../../ui';

export const PatternList = () => {

  const { loading, patterns } = useAppSelector(state => state.pattern);

  if (loading === 'pending') {
    return (<Processing />);
  }

  if (patterns.length === 0) {
    return (<Empty title='No hay patrones disponibles' />);
  }

  return (
    <Box
      sx={{
        alignContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 100px)',
      }}>

      <Grid container spacing={1}>
        {
          patterns.map(pattern => pattern.isActive && (
            <PatternListItem key={pattern._id} pattern={pattern} />
          ))
        }
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          padding: '2rem',
          justifyContent: 'center'
        }}
      >
        <Link to="/">
          <Button variant="contained" color='danger' sx={{ display: 'inline-block' }}>CANCELAR</Button>
        </Link>
      </Grid>
    </Box>
  )
}